import React, {Fragment} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {moderateScale, verticalScale} from '@utils/scaling';
import {MoveDown} from 'lucide-react-native';
import {LineGraph, SalesDealIcon, SalesTargetIcon} from '@assets/SVGs';
import {SharedStyles} from 'src/shared';

const CARD_ICON = [<SalesTargetIcon />, <SalesDealIcon />];

const DataCard = ({containerStyles = {}, data = {}, loading = false}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <Fragment>
      <DataCard1
        data={data?.dataPoint || []}
        containerStyles={containerStyles}
        loading={loading}
      />
      <View style={[styles.main, containerStyles]}>
        {loading ? (
          <Loading />
        ) : (
          <View style={styles.subContainer}>
            <View style={styles.cardContainer}>
              <View style={SharedStyles.rowCenter}>
                <Text style={styles.valueText}>{data?.visitors}</Text>
                <Text style={[styles.percentChangeText]}>{'1.5'}</Text>
                <MoveDown color={'red'} size={14} />
              </View>
              <Text style={styles.descText}>{'Visitors this year'}</Text>
            </View>
            <LineGraph />
          </View>
        )}
      </View>
    </Fragment>
  );
};

const DataCard1 = ({containerStyles = {}, data = [], loading = false}) => {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View
      style={[
        styles.main,
        {justifyContent: 'space-between'},
        !loading && styles.cardContainer,
        containerStyles,
      ]}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data?.map((item, index) => {
            return (
              <View style={styles.cardBox}>
                {CARD_ICON?.[index]}
                <View style={styles.cardContainer1}>
                  <Text style={styles.cardText1}>{item.value}</Text>
                  <Text style={styles.descText}>{item.desc}</Text>
                </View>
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};

const Loading = () => {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color={'blue'} />
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    ...SharedStyles.shadowLight,
  },
  loadingContainer: {
    height: verticalScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  subContainer: {
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(15),
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  percentChangeText: {
    color: 'red',
    fontSize: moderateScale(12),
    paddingLeft: moderateScale(10),
  },
  valueText: {
    fontWeight: 'bold',
    marginTop: verticalScale(4),
    fontSize: moderateScale(20),
  },
  descText: {
    color: '#92929D',
    marginTop: verticalScale(4),
    fontSize: moderateScale(12),
  },
  cardBox: {
    flex: 1,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer1: {
    flex: 1,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 2,
    borderColor: 'transparent',
  },
  cardText1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

export default DataCard;
