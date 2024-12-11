import React, {useState, useCallback, useEffect} from 'react';
import {Platform, View} from 'react-native';
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

const {GoogleGenerativeAI} = require('@google/generative-ai');

const BOT_IMG = require('../../../../assets/Images/chat_bot_placeholder.png');

//This Google api key is free api key so no need to worry about lossing it
const GOOGLE_AI_KEY = 'AIzaSyAyy7PzpZqXkwIunBN-ZmD9ObIwA12r7s8';
const AI_MODEL_TYPE = 'gemini-1.5-flash-002';
const BOT_NAME = 'Ai Bot';
// const AI_MODEL_TYPE = 'gemini-1.5-flash';
const genAI = new GoogleGenerativeAI(GOOGLE_AI_KEY);

const model = genAI.getGenerativeModel({model: AI_MODEL_TYPE});

function AiChat() {
  const insets = useSafeAreaInsets();
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  const [messages, setMessages] = useState([]);
  const [isMsgLoading, setisMsgLoading] = useState(false);
  const [showLottie, setShowLottie] = useState(true);

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

  const genAiModel = async userMsg => {
    setisMsgLoading(true);

    // const prompt = `I am using you as a chat bot for my application. So you have to answer user in shot messages don't replay whith to long messages so here is the user promot - ${userMsg}`;
    const prompt = `You are a highly intelligent and adaptive AI chatbot. Provide concise answers to straightforward questions and detailed, well-structured explanations for complex or open-ended queries. Tailor your tone to be friendly and engaging, ensuring users feel understood and valued. Proactively offer suggestions or clarifications if the user seems uncertain, and maintain professionalism while being approachable. Stay accurate and context-aware, and always strive to make interactions feel personalized and helpful(Also don't use Markdown). So here is the user's prompt - ${userMsg}`;
    try {
      const result = await model.generateContent(prompt);
      const aiMessage = {
        _id: uuid(),
        text: result.response.text(),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: BOT_NAME,
          avatar: BOT_IMG,
        },
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, aiMessage),
      );
      setisMsgLoading(false);
    } catch (err) {
      setisMsgLoading(false);
      console.log('API Error', err);
    }
  };

  const onSend = useCallback((messages = []) => {
    // console.log('Messages...', messages, messages?.[0]?.text || '');
    genAiModel(messages?.[0]?.text || '');
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
