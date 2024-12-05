import React from 'react';
import {View, Text} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale, width} from '@utils/scaling';
import {LineChart, BarChart} from 'react-native-gifted-charts';

const lineColor1 = '#3DD598';
const lineColor2 = '#0062FF';

const barData = [
  {
    value: 40,
    label: 'Jan',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: lineColor1,
  },
  {value: 20, frontColor: lineColor2},
  {
    value: 50,
    label: 'Feb',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: lineColor1,
  },
  {value: 40, frontColor: lineColor2},
  {
    value: 75,
    label: 'Mar',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: lineColor1,
  },
  {value: 25, frontColor: lineColor2},
  {
    value: 30,
    label: 'Apr',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: lineColor1,
  },
  {value: 20, frontColor: lineColor2},
  {
    value: 60,
    label: 'May',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: lineColor1,
  },
  {value: 40, frontColor: lineColor2},
  {
    value: 65,
    label: 'Jun',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: lineColor1,
  },
  {value: 30, frontColor: lineColor2},
];

const SalesReport = ({containerStyles = {}}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.title}>{'Sales Report'}</Text>
      <View
        style={{flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
          <View style={styles.circle} />
          <Text>{'Online Sales'}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={[styles.circle, {backgroundColor: lineColor2}]} />
          <Text>{'Offline Sales'}</Text>
        </View>
      </View>
      <BarChart
        data={barData}
        barWidth={8}
        spacing={35}
        roundedTop
        roundedBottom
        // hideRules
        // showVerticalLines
        hideDataPoints
        isAnimated
        // hideRules
        // curveType={2}
        curved
        showValuesAsDataPointsText={false}
        initialSpacing={0}
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{color: 'gray'}}
        noOfSections={3}
        maxValue={75}
      />
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingVertical: verticalScale(20),
  },
  title: {
    fontSize: scale(16),
    fontWeight: 'bold',
    paddingLeft: scale(20),
    paddingBottom: verticalScale(10),
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: lineColor1,
  },
}));

export default SalesReport;
