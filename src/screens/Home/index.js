import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale} from '@utils/scaling';
import {HomeHeader, ScreenHeader} from '@components/molecules';
import {WrapperContainer} from '@components/atoms';
import {FileDown} from 'lucide-react-native';
import {
  SalesCard,
  SalesGraph,
  SalesReport,
  DataCard,
  PieChart,
} from './components';

const HomeScreen = ({navigation}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <WrapperContainer withScreenPadding>
      <HomeHeader title="Home" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ScreenHeader
          Icon={<FileDown color={'white'} />}
          containerStyles={styles.screenHeader}
        />
        <SalesCard />
        {/* <SalesGraph containerStyles={{marginTop: 20}} />
        <DataCard containerStyles={{marginTop: 20}} />
        <SalesReport containerStyles={{marginTop: 20}} /> */}
        <PieChart containerStyles={{marginTop: 20}} />
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
  title: {
    fontSize: scale(36),
    // color: theme.colors.appPrimary,
    // marginTop: verticalScale(70),
    marginBottom: verticalScale(43),
  },
  bottom: {
    height: 50,
  },
}));

export default HomeScreen;
