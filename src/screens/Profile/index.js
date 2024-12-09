import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale} from '@utils/scaling';
import {HomeHeader, ScreenHeader} from '@components/molecules';
import {WrapperContainer} from '@components/atoms';
import {Plus} from 'lucide-react-native';
import {Button} from '@components/atoms';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from '@redux/hooks';
import {logout} from '@redux/reducers/auth';
import {storage} from 'src/syncStorage';
import { Demo } from './components';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const [loading, setLoading] = useState(false);

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

  return (
    <WrapperContainer withScreenPadding>
      <HomeHeader title="Profile" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Button
          borderRadius={10}
          title={'Log Out'}
          isLoading={loading}
          onPress={onLogOutPress}
          containerStyle={styles.button}
        />

        <Demo />
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
  bottom: {
    height: 50,
  },
  marginT20: {
    marginTop: 20,
  },
}));

export default ProfileScreen;
