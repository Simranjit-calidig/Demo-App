import React from 'react';
import {View, ScrollView} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale} from '@utils/scaling';
import {HomeHeader, ScreenHeader} from '@components/molecules';
import {WrapperContainer} from '@components/atoms';
import {ToggleButtons, TabNavigation} from './components';

const CartScreen = ({navigation}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <WrapperContainer withScreenPadding>
      <HomeHeader title="Cart" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TabNavigation />
        <ToggleButtons />
        <View style={styles.bottom} />
      </ScrollView>
    </WrapperContainer>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  screenHeader: {
    marginTop: verticalScale(20),
  },
  bottom: {
    height: 50,
  },
  marginT20: {
    marginTop: 20,
  },
}));

export default CartScreen;
