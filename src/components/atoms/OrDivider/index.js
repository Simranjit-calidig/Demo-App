import React from 'react';
import {View} from 'react-native';
import {TextContainer} from '@components/atoms';
import {moderateScale, scale, verticalScale} from '@utils/scaling';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    borderRadius: 100,
    backgroundColor: theme.colors.grayLight,
  },
  orText: {
    fontSize: scale(12),
    textAlign: 'center',
    width: moderateScale(40),
    height: verticalScale(20),
    marginTop: verticalScale(6),
    color: theme.colors.grayLight,
  },
}));

const OrDivider = ({containerStyles}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <View style={[styles.container, containerStyles]}>
      <View style={styles.divider} />
      <TextContainer text="Or" style={styles.orText} />
      <View style={styles.divider} />
    </View>
  );
};

export default OrDivider;
