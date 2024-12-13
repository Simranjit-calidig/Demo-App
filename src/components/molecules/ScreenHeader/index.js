import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {verticalScale} from '@utils/scaling';
import {SharedStyles} from 'src/shared';
import {DropDownIcon} from '@assets/SVGs';

const ScreenHeader = ({
  title = '',
  text1 = '',
  Icon = null,
  containerStyles = {},
}) => {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={[styles.main, containerStyles]}>
      <View style={styles.header}>
        <Text style={styles.labelText}>{title || 'Overview'}</Text>
        <Text style={styles.textShow}>
          {'Show: '}
          <Text style={styles.text1}>{text1 || 'This Year '}</Text>
          <DropDownIcon />
        </Text>
      </View>
      {Icon && (
        <TouchableOpacity activeOpacity={0.7} style={styles.rightBox}>
          {Icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  main: {
    paddingTop: 14,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    ...SharedStyles.shadowLight,
    // paddingVertical: 14,
    // backgroundColor: theme.colors.white,
  },
  header: {
    flex: 1,
  },
  rowBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    borderRadius: 100,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: verticalScale(10),
    backgroundColor: theme.colors.buttonBg,
  },
  labelText: {
    fontWeight: '500',
    fontSize: theme.fontSize.md,
    color: theme.colors.textColor,
  },
  textShow: {
    fontSize: theme.fontSize.md,
    paddingTop: 5,
    color: '#92929D',
  },
  text1: {
    color: '#44444F',
  },
  rightBox: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: theme.colors.blue,
  },
}));

export default ScreenHeader;
