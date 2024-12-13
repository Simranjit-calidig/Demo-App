import React, {useState, useCallback, useEffect, useRef} from 'react';
import {Platform, Pressable, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {verticalScale, width} from '@utils/scaling';
import {v4 as uuid} from 'uuid';
import LottieView from 'lottie-react-native';
import {LOTTIE_ASSETS} from '@assets/lottie';
import {getTypingSpeedBasedOnLen} from '@screens/Chat/helper';
import {
  GOOGLE_AI_MODEL_TYPE,
  AI_MODEL_CONFIG_PROMPT,
  AI_MODEL_TYPE,
} from '@constants/enum';
import {grokTextGenAiModel} from 'src/apis/grokApi';
import {GOOGLE_AI_KEY} from 'src/secrets';
import {showMessage} from 'react-native-flash-message';
const {GoogleGenerativeAI} = require('@google/generative-ai');

const BOT_NAME = 'Ai Bot';
const genAI = new GoogleGenerativeAI(GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({
  model: GOOGLE_AI_MODEL_TYPE.GEMINI_FLASH_2,
});
const BOT_IMG = require('../../../../assets/Images/chat_bot_placeholder.png');

function AiChat() {
  const insets = useSafeAreaInsets();
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  const [messages, setMessages] = useState([]);
  const [isMsgLoading, setisMsgLoading] = useState(false);
  const [showLottie, setShowLottie] = useState(true);

  const isCancelledRef = useRef(false);

  useEffect(() => {
    if (messages?.length >= 3) {
      setShowLottie(false);
    }
  }, [messages?.length, showLottie]);

  useEffect(() => {
    setisMsgLoading(true);
    setTimeout(() => {
      setMessages([
        {
          _id: uuid(),
          text: 'How can i help you',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: BOT_NAME,
            avatar: BOT_IMG,
          },
        },
      ]);
      setisMsgLoading(false);
    }, 800);
  }, []);

  const genAiModel = async (userMsg, modelType) => {
    setisMsgLoading(true);

    try {
      let result = '';
      let fullText = '';
      if (modelType === AI_MODEL_TYPE.GROK) {
        result = await grokTextGenAiModel(userMsg);
        fullText = result?.choices?.[0].message?.content;
      } else if (modelType === AI_MODEL_TYPE.GEMINI) {
        const prompt = `${AI_MODEL_CONFIG_PROMPT}. So here is the user's prompt - ${userMsg}`;
        result = await model.generateContent(prompt);
        fullText = result.response.text();
      }

      const words = fullText.split(' ');
      setisMsgLoading(false);

      const typingMessage = {
        _id: uuid(),
        text: '',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: BOT_NAME,
          avatar: BOT_IMG,
        },
      };

      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, typingMessage),
      );

      let currentText = '';
      const resultLen = words.length;
      const typingSpeed = getTypingSpeedBasedOnLen(resultLen);
      for (let i = 0; i < resultLen; i++) {
        if (isCancelledRef.current) break;
        currentText += (i > 0 ? ' ' : '') + words[i];
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
        setMessages(previousMessages => {
          const updatedMessages = [...previousMessages];
          updatedMessages[0] = {
            ...updatedMessages[0],
            text: currentText,
          };
          return updatedMessages;
        });
      }
    } catch (err) {
      setisMsgLoading(false);
      console.log('API Error', err);
      showMessage({
        message: 'Something went wronge!',
        type: 'danger',
      });
    }
  };

  const onSend = useCallback((messages = []) => {
    isCancelledRef.current = false;
    genAiModel(messages?.[0]?.text || '', AI_MODEL_TYPE.GEMINI);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom:
            Platform.OS === 'ios'
              ? verticalScale(insets.bottom)
              : verticalScale(15),
        },
      ]}>
      {/* <Pressable
        style={{
          height: 30,
          width: 150,
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 80,
          zIndex: 10,
          right: 0,
        }}
        onPress={() => {
          console.log('Hello');
          isCancelledRef.current = true;
        }}></Pressable> */}
      {showLottie && (
        <View style={styles.animationContainer}>
          <LottieView
            loop
            autoPlay
            style={styles.lottieAni}
            source={LOTTIE_ASSETS.CHAT_BOT}
          />
        </View>
      )}
      <GiftedChat
        messages={messages}
        isTyping={isMsgLoading}
        placeholder={'Type a prompt...'}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        textInputStyle={styles.inputBoxStyles}
      />
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  inputBoxStyles: {},
  animationContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
  },
  lottieAni: {
    height: 200,
    width: width,
    opacity: 0.8,
  },
}));

export default AiChat;
