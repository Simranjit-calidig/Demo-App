import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Platform,
  View,
} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
// import {LoaderService} from '@services';
import {verticalScale, HIT_POINT, SCREEN_PADDING, scale} from '@utils/scaling';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from 'src/styles/themes';
import {TextContainer, WrapperContainer} from '@components/atoms';
import {AuthBgIcon} from '@assets/SVGs';
import {ArrowLeft} from 'lucide-react-native';

const AuthConatiner = ({
  children,
  isLoading,
  showBack,
  rightText = '',
  onRightPress = () => {},
}) => {
  const {styles} = useStyles(stylesheet);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    if (isLoading) {
      // LoaderService.setVisible(true);
    } else {
      // LoaderService.setVisible(false);
    }
  }, [isLoading]);

  const onBackPress = () => {
    if (navigation.canGoBack()) {
      navigation?.goBack?.();
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      source={require('../../../assets/Images/authBg2.png')}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.black} />
        {showBack && (
          <TouchableOpacity
            hitSlop={HIT_POINT}
            style={[
              styles.backButton,
              {
                paddingTop:
                  Platform.OS === 'ios'
                    ? verticalScale(insets.top)
                    : verticalScale(15),
              },
            ]}
            onPress={onBackPress}>
            <ArrowLeft color={'black'} />
          </TouchableOpacity>
        )}
        {!!rightText && (
          <TouchableOpacity
            hitSlop={HIT_POINT}
            activeOpacity={0.7}
            style={[
              styles.rightContainer,
              {
                paddingTop:
                  Platform.OS === 'ios'
                    ? verticalScale(insets.top)
                    : verticalScale(15),
              },
            ]}
            onPress={onRightPress}>
            <TextContainer style={styles.rightText} text={rightText} />
          </TouchableOpacity>
        )}
        <View style={[styles.bgIcon]}>
          <AuthBgIcon />
        </View>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  bgIcon: {
    top: 0,
    right: -20,
    zIndex: -1,
    position: 'absolute',
  },
  image: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: SCREEN_PADDING,
  },
  backButton: {
    top: 10,
    left: -10,
    zIndex: 99,
    position: 'absolute',
  },
  rightContainer: {
    top: 25,
    right: 10,
    zIndex: 99,
    position: 'absolute',
  },
  rightText: {
    fontSize: scale(16),
    textAlign: 'center',
    color: theme.colors.appPrimary,
  },
}));

export default AuthConatiner;
