import React from 'react';
import {View, Text} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale} from '@utils/scaling';

const ProductScreen = ({navigation}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'ProductScreen'}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.appPrimary,
  },
  title: {
    fontSize: scale(36),
    // color: theme.colors.appPrimary,
    marginTop: verticalScale(70),
    marginBottom: verticalScale(43),
  },
}));

export default ProductScreen;
