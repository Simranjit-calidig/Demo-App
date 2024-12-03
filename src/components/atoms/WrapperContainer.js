import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));

const WrapperContainer = ({children, style, isSafeAreaView}) => {
  const {styles} = useStyles(stylesheet);
  const {theme} = useStyles();

  if (isSafeAreaView) {
    return (
      <SafeAreaView style={[styles.container, style]}>
        <StatusBar barStyle={theme.colors.barStyle} />
        {children}
      </SafeAreaView>
    );
  }
  return (
    <View style={[styles.container, style]}>
      <StatusBar barStyle={theme.colors.barStyle} />
      {children}
    </View>
  );
};

export default React.memo(WrapperContainer);
