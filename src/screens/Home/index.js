import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
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
import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({navigation}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const [salesData, setSalesData] = useState([]);
  const [salesFigures, setSalesFigures] = useState({});
  const [salesReport, setSalesReport] = useState([]);
  const [pieGraphData, setPieGraphData] = useState([]);
  const [thisYearData, setThisYearData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const salesData = await firestore()
        .collection('home')
        .doc('dashBoardData')
        .get();
      const salesLineGraph = await firestore()
        .collection('home')
        .doc('salesLineGraph')
        .get();

      const barGraph = await firestore()
        .collection('home')
        .doc('SalesReport')
        .get();

      const pieGraph = await firestore()
        .collection('home')
        .doc('pieGraph')
        .get();

      const thisYearData = await firestore()
        .collection('home')
        .doc('thisYear')
        .get();

      if (!!salesData?._data?.data) {
        const items = JSON.parse(salesData?._data?.data);
        setSalesData(items);
      }

      if (!!salesLineGraph?._data?.lineData1) {
        const lineData1 = JSON.parse(salesLineGraph?._data?.lineData1);
        const lineData2 = JSON.parse(salesLineGraph?._data?.lineData2);
        setSalesFigures({lineData1, lineData2});
      }

      if (!!thisYearData?._data?.data) {
        const thisYear = JSON.parse(thisYearData?._data?.data);
        setThisYearData(thisYear);
      }

      if (!!salesData?._data?.data) {
        const barData = JSON.parse(barGraph?._data?.barData);
        setSalesReport(barData);
      }

      if (!!pieGraph?._data?.data) {
        const graphData = JSON.parse(pieGraph?._data?.data);
        setPieGraphData(graphData);
      }

      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      console.log('get-Data_error', err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <WrapperContainer withScreenPadding>
      <HomeHeader title="Home" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ScreenHeader
          Icon={<FileDown color={'white'} />}
          containerStyles={styles.screenHeader}
        />
        <SalesCard data={salesData} loading={loading} />
        <SalesGraph
          loading={loading}
          data={salesFigures}
          containerStyles={styles.marginT20}
        />
        <DataCard
          data={thisYearData}
          loading={loading}
          containerStyles={styles.marginT20}
        />
        <SalesReport
          loading={loading}
          data={salesReport}
          containerStyles={styles.marginT20}
        />
        <PieChart
          loading={loading}
          data={pieGraphData}
          containerStyles={styles.marginT20}
        />
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

export default HomeScreen;
