import React from 'react';
import {TextContainer} from '@components/atoms';
import {moderateScale} from '@utils/scaling';
import {ActivityIndicator, Pressable} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  btnStyle: isDarkMode => ({
    height: moderateScale(52),
    backgroundColor: isDarkMode ? theme.colors.white : theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  }),
}));

const ButtonContainer = ({label, isLoading, style, textStyle, ...props}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <Pressable style={[styles.btnStyle(isDarkMode), style]} {...props}>
      {isLoading ? (
        <ActivityIndicator
          color={isDarkMode ? theme.colors.black : theme.colors.white}
        />
      ) : (
        <TextContainer
          text={label}
          style={{
            color: isDarkMode ? theme.colors.black : theme.colors.white,
            ...textStyle,
          }}
        />
      )}
    </Pressable>
  );
};

export default React.memo(ButtonContainer);