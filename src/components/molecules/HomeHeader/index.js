import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {moderateScale, SCREEN_PADDING, verticalScale} from '@utils/scaling';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Bell, Menu} from 'lucide-react-native';
import {COLORS} from 'src/styles/themes';
import {SharedStyles} from 'src/shared';

const HomeHeader = ({onNotificationPress = () => {}, title = ''}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.main,
        {
          paddingTop:
            Platform.OS === 'ios'
              ? verticalScale(insets.top)
              : verticalScale(15),
        },
      ]}>
      <View style={styles.rowBox}>
        <TouchableOpacity activeOpacity={0.7} onPress={onNotificationPress}>
          <Menu />
        </TouchableOpacity>
        <Text style={styles.labelText}>{title}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={onNotificationPress}>
        <Bell />
      </TouchableOpacity>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: theme.colors.white,
    marginHorizontal: -SCREEN_PADDING,
    paddingHorizontal: SCREEN_PADDING,
    ...SharedStyles.shadow,
  },
  rowBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    borderRadius: 100,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: verticalScale(10),
    backgroundColor: theme.colors.buttonBg,
  },
  labelText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.fontSize.lg2,
    color: theme.colors.textColor,
    // paddingBottom: verticalScale(1.5),
  },
}));

export default HomeHeader;
