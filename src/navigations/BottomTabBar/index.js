import React, {useCallback, Fragment, useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {tabHelper} from './tabHelper';
import {moderateScale, verticalScale, scale} from '@utils/scaling';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import NAVIGATION from '@navigations/navigation';
import {useSelector} from 'react-redux';
import {COLORS} from 'src/styles/themes';
import {SharedStyles} from 'src/shared';

const inActiveColor = '#36363d';
const activeColor = 'orange';

const CustomTabBar = ({state, navigation}) => {
  const insets = useSafeAreaInsets();
  const {userData} = useSelector(state => state.auth);
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const [selectedTab, setSelectedTab] = useState('Home');

  const onPress = useCallback(
    (route, index) => {
      try {
        if (route?.route === 'ChatScreen') {
          navigation.navigate(NAVIGATION.SCREEN.CHAT, {});
        } else {
          setSelectedTab(route.title);
          // navigation.navigate(NAVIGATION.STACK.MAIN, {
          //   screen: route.route,
          // });
          //With drawer navigation
          navigation.navigate(NAVIGATION.STACK.APP_DRAWER, {
            screen: NAVIGATION.DRAWER,
            params: {screen: route.route},
          });
        }
      } catch (error) {
        console.log('Navigation Error', error);
      }
    },
    [navigation],
  );

  return (
    <Fragment>
      <View style={[styles.tabStyles]}>
        {tabHelper(isDarkMode).map((item, index) => {
          const Icon = item.Icon;
          return (
            <TouchableOpacity
              style={styles.tab}
              key={`${item.title}_${index}`}
              onPress={onPress.bind(this, item, index)}>
              <Fragment>
                {Icon[selectedTab === item.title ? 'active' : 'inActive']}
              </Fragment>
              <Text
                style={{
                  color:
                    selectedTab === item.title ? activeColor : inActiveColor,
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Fragment>
  );
};

const stylesheet = createStyleSheet(theme => ({
  tabStyles: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: verticalScale(3),
    backgroundColor: 'white',
    paddingBottom:
      Platform.OS === 'ios' ? verticalScale(16) : verticalScale(18),
    ...SharedStyles.shadow,
  },
  tab: {
    flex: 1,
    borderRadius: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default CustomTabBar;
