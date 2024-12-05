import React from 'react';
import {View, Text} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale, width} from '@utils/scaling';
import {LineChart} from 'react-native-gifted-charts';

const lineData = [
  {value: 60, dataPointText: '0'},
  {value: 30, dataPointText: '10', label: 'May', showXAxisIndex: true},
  {value: 8, dataPointText: '8', label: 'June', showXAxisIndex: true},
  {value: 58, dataPointText: '58', label: 'Jul', showXAxisIndex: true},
  {value: 56, dataPointText: '56', label: 'Aug', showXAxisIndex: true},
  {value: 78, dataPointText: '78', label: 'Sep', showXAxisIndex: true},
  {value: 74, dataPointText: '74', label: 'Oct', showXAxisIndex: true},
  {value: 98, dataPointText: '98', label: 'Nov', showXAxisIndex: true},
];

const lineData2 = [
  {value: 30, dataPointText: '0'},
  {value: 20, dataPointText: '20'},
  {value: 18, dataPointText: '18'},
  {value: 40, dataPointText: '40'},
  {value: 36, dataPointText: '36'},
  {value: 60, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 85, dataPointText: '85'},
];

const lineColor1 = '#3DD598';
const lineColor2 = '#0062FF';

const SalesGraph = ({containerStyles = {}}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.title}>{'Sales Figures'}</Text>
      <View
        style={{flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
          <View style={styles.circle} />
          <Text>{'Marketing Sales'}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={[styles.circle, {backgroundColor: lineColor2}]} />
          <Text>{'Cases Sales'}</Text>
        </View>
      </View>
      <LineChart
        data={lineData}
        data2={lineData2}
        height={250}
        width={width}
        showVerticalLines
        hideDataPoints
        hideRules
        isAnimated
        // curveType={2}
        curved
        showValuesAsDataPointsText={false}
        spacing={44}
        initialSpacing={0}
        color1={lineColor1}
        color2={lineColor2}
        dataPointsColor1={lineColor1}
        dataPointsColor2={lineColor2}
        // textColor1="green"
        // dataPointsHeight={6}
        // dataPointsWidth={6}
        // textShiftY={-2}
        // textShiftX={-5}
        // textFontSize={13}
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

export default SalesGraph;
