import {ScrollView, View, Text} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {moderateScale, verticalScale} from '@utils/scaling';
import {SharedStyles} from 'src/shared';
import {Button, WrapperContainer} from '@components/atoms';

export function ErrorDetails(props) {
  const {styles, theme} = useStyles(stylesheet);
  return (
    <WrapperContainer withScreenPadding style={SharedStyles.fullFlex}>
      <ScrollView
        style={styles.errorSection}
        contentContainerStyle={styles.errorSectionContentContainer}>
        <View style={styles.topSection}>
          <Text style={styles.heading}>{'Something went wrong!'}</Text>
          <Text>
            {
              'This is the screen that your users will see in production when an error is thrown. Can be customize to figma UI'
            }
          </Text>
        </View>
        {!!props.error && (
          <Text style={styles.errorContent}>{`${props.error}`.trim()}</Text>
        )}
        {!!props.errorInfo?.componentStack && (
          <Text style={styles.errorBacktrace}>
            {`${props.errorInfo?.componentStack ?? ''}`.trim()}
          </Text>
        )}
      </ScrollView>
      <Button
        title={'RESET APP'}
        borderRadius={10}
        onPress={props?.onReset}
        containerStyle={styles.resetButton}
      />
    </WrapperContainer>
  );
}

const stylesheet = createStyleSheet(theme => ({
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
    paddingTop: verticalScale(32),
    flex: 1,
  },
  topSection: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    color: '#C03403',
    marginBottom: verticalScale(16),
    fontSize: 20,
  },
  errorSection: {
    flex: 2,
    borderRadius: 6,
    marginTop: verticalScale(50),
  },
  errorSectionContentContainer: {
    padding: verticalScale(16),
  },
  errorContent: {
    color: '#C03403',
    fontSize: 16,
  },
  errorBacktrace: {
    color: '#564E4A',
    fontSize: 16,
    marginTop: verticalScale(16),
  },
  resetButton: {
    backgroundColor: '#C03403',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(40),
  },
}));
