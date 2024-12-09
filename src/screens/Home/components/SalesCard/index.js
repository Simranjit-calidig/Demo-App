import React, {Fragment, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
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
import {MoveUp, MoveDown} from 'lucide-react-native';
import {COLORS} from 'src/styles/themes';
import {SharedStyles} from 'src/shared';
import AnimatedNumbers from 'react-native-animated-numbers';

const SalesCard = ({data = [], containerStyles = {}, loading = false}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <View style={[styles.main, containerStyles]}>
      <View style={styles.subContainer}>
        {data.map((item, index) => {
          return (
            <Card
              key={item.key}
              desc={item.text}
              value={item.value}
              title={item.title}
              loading={loading}
              percentChange={item.percentChange}
            />
          );
        })}
      </View>
    </View>
  );
};

const Card = ({
  desc = '',
  value = '',
  title = '',
  loading = false,
  percentChange = '',
}) => {
  const {styles, theme} = useStyles(stylesheet);
  const [animateToNumber, setAnimateToNumber] = React.useState(0);

  const isPositive = percentChange > 0;
  const perChangeSysmbol = isPositive ? '+' : '';
  useEffect(() => {
    setTimeout(() => setAnimateToNumber(value), 1200);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <View style={[styles.cardContainer, styles.loadingContainer]}>
          <ActivityIndicator color={'blue'} />
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
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

              {isPositive ? (
                <MoveUp color={'green'} size={14} />
              ) : (
                <MoveDown color={'red'} size={14} />
              )}
            </View>
          </View>
          <View style={SharedStyles.row}>
            <Text style={styles.valueText}>{'$'}</Text>
            <AnimatedNumbers
              includeComma
              animationDuration={2000}
              fontStyle={styles.valueText}
              animateToNumber={animateToNumber}
            />
          </View>
          <Text style={styles.descText}>{desc}</Text>
        </View>
      )}
    </Fragment>
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
  loadingContainer: {
    height: 100,
    justifyContent: 'center',
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
    // marginTop: verticalScale(4),
    fontSize: moderateScale(20),
    lineHeight: moderateScale(30),
  },
  descText: {
    marginTop: verticalScale(4),
    fontSize: moderateScale(12),
    color: '#92929D',
  },
}));

export default SalesCard;
