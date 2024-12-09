import React, {useEffect, useState, Fragment} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {
  height,
  moderateScale,
  SCREEN_PADDING,
  verticalScale,
  width,
} from '@utils/scaling';
import {HomeHeader, ScreenHeader} from '@components/molecules';
import {TextContainer, WrapperContainer, Avatar} from '@components/atoms';
import {useDispatch, useSelector} from '@redux/hooks';
import {logout} from '@redux/reducers/auth';
import {storage} from 'src/syncStorage';
import {Demo} from './components';
import {
  Settings,
  ReceiptText,
  LockKeyhole,
  Headphones,
  Briefcase,
  Info,
  LogOut,
  SunMoon,
} from 'lucide-react-native';
import {COLORS} from 'src/styles/themes';
import auth from '@react-native-firebase/auth';
import {head} from 'node_modules/axios/index.d.cts';

const TABS = [
  {
    title: 'Settings',
    icon: ({color}) => <Settings size={24} color={color} />,
    key: 'settings',
  },
  // {
  //   title: 'Display mode',
  //   icon: ({color}) => <SunMoon size={24} color={color} />,
  //   key: 'displaymode',
  // },
  {
    title: 'Terms of service',
    icon: ({color}) => <ReceiptText size={24} color={color} />,
    key: 'tandc',
  },
  {
    title: 'Privacy policy',
    icon: ({color}) => <LockKeyhole size={24} color={color} />,
    key: 'privacypolicy',
  },
  {
    title: 'Contact us',
    icon: ({color}) => <Headphones size={24} color={color} />,
    key: 'contactus',
  },
  // {
  //   title: 'Work with us',
  //   icon: ({color}) => <Briefcase size={24} color={color} />,
  //   key: 'work',
  // },
  {
    title: 'About us',
    icon: ({color}) => <Info size={24} color={color} />,
    key: 'about',
  },
  {
    title: 'Log Out',
    icon: () => <LogOut size={24} color={COLORS.error} />,
    key: 'logout',
  },
];

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {styles, theme} = useStyles(stylesheet);

  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth().currentUser;
    setUser(currentUser);
  }, []);

  const onLogOutPress = () => {
    setLoading(true);
    // auth()
    //   .signOut()
    //   .then(() => {
    //     console.log('User signed out!');
    //   });
    console.log('logout', loading);
    try {
      dispatch(logout());
      storage.clearAll();
      setLoading(false);
    } catch (err) {
      console.log('LOGOUT_ERROR', err);
    }
  };

  const onTabPress = item => {
    switch (item) {
      case 'displaymode':
        console.log('displaymode');
        return;
      case 'settings':
        console.log('settings');
        return;
      case 'tandc':
        console.log('tandc');
        return;
      case 'privacypolicy':
        console.log('privacypolicy');
        return;
      case 'contactus':
        console.log('contactus');
        return;
      case 'work':
        console.log('work');
        return;
      case 'about':
        console.log('about');
        return;
      case 'logout':
        console.log('logout');
        onLogOutPress();
        return;
    }
  };

  return (
    <WrapperContainer withScreenPadding>
      <HomeHeader title="Profile" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.profileBoxContainer}>
          <Avatar
            uri={
              !!user?.photoURL
                ? user?.photoURL
                : 'https://wallpapers.com/images/hd/placeholder-profile-icon-8qmjk1094ijhbem9.jpg'
            }
            imageStyles={{
              borderWidth: 0.2,
              height: moderateScale(50),
              width: moderateScale(50),
              borderColor: COLORS.textGray,
            }}
          />
          <TextContainer text={user?.email} style={[styles.emailText]} />
        </View>
        {TABS.map((item, index) => {
          let lastElement = TABS.length - 1 === index;
          const Icon = item?.icon;
          const color = theme.colors.typography;
          return (
            <Fragment key={item.key + index}>
              <TouchableOpacity
                style={styles.boxContainer}
                onPress={() => onTabPress(item.key)}>
                <Icon color={color} />
                <TextContainer
                  text={item.title}
                  style={[
                    styles.boxText,
                    {
                      color: lastElement
                        ? COLORS.error
                        : theme.colors.typography,
                    },
                  ]}
                />
                {lastElement && loading && (
                  <ActivityIndicator size={'small'} color={COLORS.error} />
                )}
              </TouchableOpacity>
              <View style={styles.divider} />
            </Fragment>
          );
        })}
        <View style={styles.bottom} />
      </ScrollView>
    </WrapperContainer>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  screenHeader: {
    marginTop: verticalScale(20),
  },
  boxContainer: {
    flexDirection: 'row',
    paddingVertical: verticalScale(15),
  },
  profileBoxContainer: {
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: COLORS.textGray,
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(20),
    marginBottom: 20,
  },
  divider: {
    borderBottomWidth: 1,
    marginHorizontal: -SCREEN_PADDING,
    paddingHorizontal: SCREEN_PADDING,
    borderBottomColor: theme.colors.textGray,
  },
  emailText: {
    fontWeight: 'bold',
    fontSize: theme.fontSize.sm2,
    marginTop: verticalScale(10),
  },
  boxText: {
    flex: 1,
    fontSize: theme.fontSize.sm2,
    marginLeft: moderateScale(17),
    // color: theme.colors.typography,
  },
  marginT20: {
    marginTop: 20,
  },
}));

export default ProfileScreen;
