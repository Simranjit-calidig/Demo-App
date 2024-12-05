import {SCREEN_PADDING} from '@utils/scaling';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  screenPadding: {
    paddingHorizontal: SCREEN_PADDING,
  },
}));

const WrapperContainer = ({
  style,
  children,
  isSafeAreaView,
  withScreenPadding,
}) => {
  const {styles} = useStyles(stylesheet);
  const {theme} = useStyles();

  if (isSafeAreaView) {
    return (
      <SafeAreaView
        style={[
          style,
          styles.container,
          withScreenPadding && styles.screenPadding,
        ]}>
        <StatusBar barStyle={theme.colors.barStyle} />
        {children}
      </SafeAreaView>
    );
  }
  return (
    <View
      style={[
        style,
        styles.container,
        withScreenPadding && styles.screenPadding,
      ]}>
      <StatusBar barStyle={theme.colors.barStyle} />
      {children}
    </View>
  );
};

export default React.memo(WrapperContainer);
