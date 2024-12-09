import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from 'src/styles/themes';
import fontFamily from '@constants/fontFamily';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {moderateScale, verticalScale} from '@utils/scaling';
import {SharedStyles} from 'src/shared';

const Button = ({
  title,
  onPress,
  isSolid = true,
  containerStyle,
  textStyle = {},
  compact = false,
  isLoading = false,
  isDisabled = false,
  borderRadius = 100,
  icon = null,
}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  const color = !isSolid
    ? COLORS.blue
    : isDisabled
    ? theme.colors.typography
    : COLORS.white;
  const textColor = isLoading ? 'transparent' : color;

  const onPressHandler = () => {
    if (isDisabled || isLoading) {
      return;
    }
    onPress?.();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={isDisabled ? null : onPressHandler}
      style={[{opacity: isDisabled ? 0.2 : 1, borderRadius}]}>
      <View
        style={[
          styles.container,
          {
            paddingVertical: compact ? verticalScale(8) : verticalScale(13),
            borderRadius,
          },
          icon && styles.withIcon,
          containerStyle,
        ]}>
        {icon && <>{icon}</>}
        <Text
          style={[
            styles.labelText,
            {color: textColor, paddingLeft: icon ? moderateScale(10) : 0},
            textStyle,
          ]}>
          {title}
        </Text>
        <View style={[styles.loader, {opacity: isLoading ? 1 : 0}]}>
          <ActivityIndicator color={COLORS.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    alignItems: 'center',
    paddingHorizontal: moderateScale(40),
    backgroundColor: '#1D61E7',
  },
  linearGradient: {
    padding: moderateScale(2),
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: theme.fontSize.sm2,
    lineHeight: theme.fontSize.lg2,
    fontFamily: fontFamily.nunitoBold,
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    alignSelf: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
}));

export default Button;
