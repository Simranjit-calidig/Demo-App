import {Platform} from 'react-native';
import fontFamily from '@constants/fontFamily';
import {createStyleSheet} from 'react-native-unistyles';
import {moderateScale, scale, verticalScale} from '@utils/scaling';
import {COLORS} from 'src/styles/themes';

export default createStyleSheet(theme => ({
  // btnStyle: (isDarkMode) => ({
  //   backgroundColor: isDarkMode ? theme.colors.white : theme.colors.black,
  // }),
  container: {
    borderWidth: 0.3,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    paddingHorizontal: verticalScale(13),
    borderColor: 'rgba(0,0,0, 0.002)',
  },
  textInput: {
    flex: 1,
    fontSize: theme.fontSize.sm2,
    color: theme.colors.inputText,
    paddingVertical:
      Platform.OS === 'ios' ? verticalScale(12) : verticalScale(10),
  },
  countText: {
    top: -18,
    right: 10,
    fontSize: 12,
    position: 'absolute',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(1),
    marginHorizontal: scale(5),
  },
  emptyErrorContainer: {
    // marginTop: verticalScale(3),
  },
  errorText: {
    maxWidth: '95%',
    color: COLORS.error,
    fontSize: theme.fontSize.xsm,
    marginLeft: moderateScale(4),
  },
  emptyErrorText: {
    maxWidth: '95%',
    color: 'transparent',
    fontSize: theme.fontSize.xsm,
  },
  placeHolderText: {},
  titleText: {
    fontSize: theme.fontSize.sm,
    marginLeft: moderateScale(2),
    color: theme.colors.typography,
    marginBottom: verticalScale(1),
  },
}));
