import React, {Fragment} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale, width} from '@utils/scaling';
import {BarChart} from 'react-native-gifted-charts';
import {SharedStyles} from 'src/shared';

const lineColor1 = '#3DD598';
const lineColor2 = '#0062FF';

const SalesReport = ({containerStyles = {}, loading = false, data = []}) => {
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
          <Text style={styles.title}>{'Sales Report'}</Text>
          <View style={styles.indicatorContainer}>
            <View style={styles.subIndicatorContainer}>
              <View style={styles.circle} />
              <Text>{'Online Sales'}</Text>
            </View>
            <View style={SharedStyles.rowCenter}>
              <View style={[styles.circle, {backgroundColor: lineColor2}]} />
              <Text>{'Offline Sales'}</Text>
            </View>
          </View>
          <BarChart
            data={data}
            barWidth={8}
            spacing={35}
            // height={250}
            roundedTop
            // minHeight={0.1}
            roundedBottom
            // hideRules
            // showVerticalLines
            hideDataPoints
            isAnimated
            // hideRules
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

export default SalesReport;
