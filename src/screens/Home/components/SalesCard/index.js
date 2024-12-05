import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {
  moderateScale,
  SCREEN_PADDING,
  verticalScale,
  width,
} from '@utils/scaling';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoveUp, MoveDown} from 'lucide-react-native';
import {COLORS} from 'src/styles/themes';
import {SharedStyles} from 'src/shared';

const SALES_DATA = [
  {
    title: 'Sales',
    percentChange: 2.5,
    key: '1jshnc',
    value: 10289,
    text: 'Compared to ($21340 last year)',
  },
  {
    title: 'Sales',
    percentChange: 0.5,
    key: '27chjjjs',
    value: 20921,
    text: 'Compared to ($19000 last year)',
  },
  {
    title: 'Sales',
    percentChange: -1.5,
    key: '76dsjh',
    value: 149,
    text: 'Compared to ($165 last year)',
  },
  {
    title: 'Sales',
    percentChange: 2.5,
    key: '3ds3fs',
    value: 17390,
    text: 'Compared to ($10500 last year)',
  },
];

const SalesCard = ({title = '', text1 = '', containerStyles = {}}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.main, containerStyles]}>
      <View style={styles.subContainer}>
        {SALES_DATA.map((item, index) => {
          return (
            <Card
              key={item.key}
              desc={item.text}
              value={item.value}
              title={item.title}
              percentChange={item.percentChange}
            />
          );
        })}
      </View>
    </View>
  );
};

const Card = ({desc = '', value = '', title = '', percentChange = ''}) => {
  const {styles, theme} = useStyles(stylesheet);

  const isPositive = percentChange > 0;
  const perChangeSysmbol = isPositive ? '+' : '';

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{'Sales'}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.percentChangeText,
              {
                color: isPositive ? 'green' : 'red',
              },
            ]}>
            {perChangeSysmbol + percentChange}
          </Text>
          <MoveUp color={isPositive ? 'green' : 'red'} size={14} />
        </View>
      </View>
      <Text style={styles.valueText}>{'$' + value}</Text>
      <Text style={styles.descText}>{desc}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  main: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 14,
    ...SharedStyles.shadowLight,
  },
  subContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: verticalScale(15),
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(15),
    width: width / 2 - SCREEN_PADDING - 10,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  percentChangeText: {
    fontSize: moderateScale(12),
  },
  valueText: {
    fontWeight: 'bold',
    marginTop: verticalScale(4),
    fontSize: moderateScale(20),
  },
  descText: {
    marginTop: verticalScale(4),
    fontSize: moderateScale(12),
    color: '#92929D',
  },
}));

export default SalesCard;
