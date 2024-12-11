import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, SCREEN_PADDING, verticalScale} from '@utils/scaling';
import {HomeHeader, ScreenHeader} from '@components/molecules';
import {WrapperContainer} from '@components/atoms';
import AiChat from './components/Chat';

const ChatScreen = ({navigation}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  const onBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <WrapperContainer
    // withScreenPadding
    >
      <View style={styles.screenHeader}>
        <HomeHeader title="AI Chat" withBack onBackPress={onBackPress} />
      </View>
      <AiChat />
    </WrapperContainer>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  screenHeader: {
    paddingHorizontal: SCREEN_PADDING,
  },
  bottom: {
    height: 50,
  },
  marginT20: {
    marginTop: 20,
  },
}));

export default ChatScreen;
