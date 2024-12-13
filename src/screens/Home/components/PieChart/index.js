import React, {Fragment} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale, width} from '@utils/scaling';
import {PieChart as PieChartGraph} from 'react-native-gifted-charts';

const lineColor1 = '#FFC542';
const lineColor2 = '#ED6665';
const lineColor3 = '#3DD598';
const lineColor4 = '#177AD5';

const PieChart = ({containerStyles = {}, loading = false, data = []}) => {
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
          <Text style={styles.title}>{'2017'}</Text>
          <View style={{flex: 1, alignItems: 'center'}}>
            <PieChartGraph
              donut
              isAnimated
              data={data}
              radius={130}
              textColor="black"
            />
            <View style={styles.absoluteContainer}>
              <Text style={styles.innerText}>{'22.870'}</Text>
              <Text style={styles.descText}>{'Visitors this year'}</Text>
            </View>
          </View>
          <View style={styles.rowCenter1}>
            <View style={[styles.rowCenter, {marginRight: 20}]}>
              <View style={styles.circle} />
              <Text>{'Amazon 2.1K'}</Text>
            </View>
            <View style={styles.rowCenter}>
              <View style={[styles.circle, {backgroundColor: lineColor2}]} />
              <Text>{'Alibaba 1K'}</Text>
            </View>
          </View>
          <View style={[styles.rowCenter, {alignSelf: 'center'}]}>
            <View style={[styles.rowCenter, {marginRight: 20}]}>
              <View style={[styles.circle, {backgroundColor: lineColor3}]} />
              <Text>{'Ebay 1.9k'}</Text>
            </View>
            <View style={styles.rowCenter}>
              <View style={[styles.circle, {backgroundColor: lineColor1}]} />
              <Text>{'Shopify 15.7K'}</Text>
            </View>
          </View>
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
    textAlign: 'center',
    paddingBottom: verticalScale(10),
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
    backgroundColor: lineColor4,
  },
  absoluteContainer: {
    position: 'absolute',
    zIndex: 1,
    height: 230,
    width: 230,
    borderRadius: '100%',
    top: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  innerText: {
    textAlign: 'center',
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  descText: {
    color: '#92929D',
    fontSize: scale(14),
    textAlign: 'center',
    marginTop: verticalScale(4),
  },
  rowCenter1: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginBottom: verticalScale(10),
    marginTop: verticalScale(20),
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default PieChart;
