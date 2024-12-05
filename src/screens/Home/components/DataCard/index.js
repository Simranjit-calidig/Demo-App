import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {moderateScale, verticalScale} from '@utils/scaling';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoveDown} from 'lucide-react-native';
import {COLORS} from 'src/styles/themes';
import {LineGraph, SalesDealIcon, SalesTargetIcon} from '@assets/SVGs';
import {SharedStyles} from 'src/shared';

const DataCard = ({containerStyles = {}}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const insets = useSafeAreaInsets();

  return (
    <Fragment>
      <DataCard1 containerStyles={containerStyles} />
      <View style={[styles.main, containerStyles]}>
        <View style={styles.subContainer}>
          <View style={styles.cardContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.valueText}>{'10,254'}</Text>
              <Text style={[styles.percentChangeText]}>{'1.5'}</Text>
              <MoveDown color={'red'} size={14} />
            </View>
            <Text style={styles.descText}>{'Visitors this year'}</Text>
          </View>
          <LineGraph />
        </View>
      </View>
    </Fragment>
  );
};

const DATA = [
  {
    key: '12jjds',
    value: '68%',
    desc: 'Hit Rate this year',
    icon: <SalesTargetIcon />,
  },
  {
    key: '7dfs68d',
    value: '76%',
    desc: 'Deal this year',
    icon: <SalesDealIcon />,
  },
];

const DataCard1 = ({containerStyles = {}}) => {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View
      style={[
        styles.main,
        {justifyContent: 'space-between'},
        styles.cardContainer,
        containerStyles,
      ]}>
      {DATA.map((item, index) => {
        return (
          <View style={styles.cardBox}>
            {item.icon}
            <View style={styles.cardContainer1}>
              <Text style={styles.cardText1}>{'68%'}</Text>
              <Text style={styles.descText}>{'Hit Rate this year'}</Text>
            </View>
          </View>
        );
      })}
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
