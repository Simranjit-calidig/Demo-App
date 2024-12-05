import React, {Fragment} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale, width} from '@utils/scaling';
import {LineChart} from 'react-native-gifted-charts';

const lineColor1 = '#3DD598';
const lineColor2 = '#0062FF';

const SalesGraph = ({containerStyles = {}, data = {}, loading = false}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <Fragment>
      {loading ? (
        <View
          style={[styles.container, styles.loadingContainer, containerStyles]}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      ) : (
        <View style={[styles.container, containerStyles]}>
          <Text style={styles.title}>{'Sales Figures'}</Text>
          <View style={styles.indicatorContainer}>
            <View style={styles.subIndicatorContainer}>
              <View style={styles.circle} />
              <Text>{'Marketing Sales'}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={[styles.circle, {backgroundColor: lineColor2}]} />
              <Text>{'Cases Sales'}</Text>
            </View>
          </View>
          <LineChart
            data={data?.lineData1}
            data2={data?.lineData2}
            height={250}
            width={width}
            showVerticalLines
            hideDataPoints
            hideRules
            isAnimated
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
      )}
    </Fragment>
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
  indicatorContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  subIndicatorContainer: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingContainer: {
    height: 300,
    justifyContent: 'center',
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
