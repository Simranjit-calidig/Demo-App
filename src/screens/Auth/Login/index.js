import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Pressable, Keyboard, TouchableOpacity} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {HIT_POINT, moderateScale, scale, verticalScale} from '@utils/scaling';
import {AuthContainer} from '@components/molecules';
import {AppIcon} from '@assets/SVGs';
import {Button, Input, OrDivider, TextContainer} from '@components/atoms';
import {Formik} from 'formik';
import FORMIK from 'src/formik';
import {SharedStyles} from 'src/shared';
import {COLORS} from 'src/styles/themes';
import {SOCIAL_LOGIN, STORAGE} from '@constants/enum';
import NAVIGATION from '@navigations/navigation';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from '@redux/hooks';
import {saveUserData} from '@redux/reducers/auth';
import {setItem} from 'src/services/apiService';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {googleLogin} from '@utils/googleSignin';

const initialValues = {
  email: '',
  password: '',
};

const {fields, schema} = FORMIK.LOGIN_IN_WITH_EMAIL_PROVIDER;

const LoginScreen = ({navigation}) => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '108737756279-ju8bfhvrfdfin7t5us9ge5pm4j97b7mr.apps.googleusercontent.com',
      iosClientId:
        '108737756279-77akqr5cim1qpokreffbojtu8bfasup6.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
  }, []);

  const onFormSubmit = async values => {
    Keyboard.dismiss?.();

    console.log('Values on Submit', values);
    setLoading(true);

    auth()
      .signInWithEmailAndPassword(values?.email, values?.password)
      .then(res => {
        console.log('User account created & signed in!', res);
        const profileInfo = {
          additionalUserInfo: res?.additionalUserInfo,
          displayName: res?.user?.displayName,
          email: res?.user?.email,
          emailVerified: res?.user?.emailVerified,
          phoneNumber: res?.user?.phoneNumber,
          photoURL: res?.user?.photoURL,
          providerId: res?.user?.providerId,
          tenantId: res?.user?.tenantId,
          uid: res?.user?.uid,
        };
        const isLoggedIn = true;
        setItem(STORAGE.IS_LOGGED_IN, isLoggedIn);
        dispatch(saveUserData({profileInfo, isLoggedIn}));
        formRef.current?.resetForm();
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        setLoading(false);
        console.error(error);
      });
  };

  const onSocialLoginPress = type => {
    switch (type) {
      case 'google':
        googleLogin()
          .then(res => {
            const profileInfo = {
              additionalUserInfo: res?.data?.additionalUserInfo,
              displayName: res?.data?.user?.givenName,
              id: res?.data?.user?.id,
              email: res?.data?.user?.email,
              phoneNumber: res?.user?.phoneNumber,
              photoURL: res?.data?.user?.photo,
              idToken: res?.data?.idToken,
            };
            const isLoggedIn = true;
            setItem(STORAGE.IS_LOGGED_IN, isLoggedIn);
            dispatch(saveUserData({profileInfo, isLoggedIn}));
          })
          .catch(err => {
            console.log(err, 'erorrrgoogle');
          });
        return;
    }
  };

  const onGooglePress = () => {};

  const onForgotPassPress = () => {
    console.log('onForgotPassPress');
    navigation.navigate(NAVIGATION.STACK.AUTH, {
      screen: NAVIGATION.AUTH.SIGNUP_SCREEN,
    });
  };

  const dontHaveAccountPress = () => {
    console.log('onForgotPassPress');
    navigation.navigate(NAVIGATION.STACK.AUTH, {
      screen: NAVIGATION.AUTH.SIGNUP_SCREEN,
    });
  };

  return (
    <AuthContainer>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <AppIcon />
        </View>
        <Text style={styles.title}>{'Sign in to your Account'}</Text>
        <Text style={styles.subTitle}>
          {'Enter your email and password to log in '}
        </Text>
        <Formik
          validateOnChange
          innerRef={formRef}
          onSubmit={onFormSubmit}
          validationSchema={schema}
          initialValues={initialValues}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
          }) => {
            return (
              <View>
                {fields?.map?.((field, index) => {
                  const fieldKey = field.type;
                  const parsedPlaceholder =
                    field.placeholder + `${field?.required ? '*' : ''}`;
                  return (
                    <Input
                      {...field}
                      value={values[fieldKey]}
                      onBlur={() => {
                        setFieldTouched(fieldKey, true);
                      }}
                      key={`field-${index}-login`}
                      placeholder={parsedPlaceholder}
                      onChangeText={handleChange(fieldKey)}
                      error={touched?.[fieldKey] && errors?.[fieldKey]}
                      containerStyle={field.fieldStyle}
                    />
                  );
                })}
                <TextContainer
                  onPress={onForgotPassPress}
                  text="Forgotten password?"
                  style={styles.forgotText}
                />
                <Button
                  title={'Log In'}
                  borderRadius={10}
                  isLoading={loading}
                  onPress={handleSubmit}
                  containerStyle={styles.button}
                  isDisabled={
                    !values?.email ||
                    !values?.password ||
                    errors?.email ||
                    errors?.password
                  }
                />
                <OrDivider containerStyles={styles.divider} />
              </View>
            );
          }}
        </Formik>
        {SOCIAL_LOGIN?.map?.((item, index) => {
          return (
            <Button
              borderRadius={10}
              title={item.title}
              key={item.key + index}
              icon={item.icon}
              containerStyle={styles.socialBtns}
              textStyle={{color: 'black'}}
              onPress={() => onSocialLoginPress(item.key)}
            />
          );
        })}
      </View>
      <View style={SharedStyles.itemCenter}>
        <TouchableOpacity
          activeOpacity={0.7}
          hitSlop={HIT_POINT}
          onPress={dontHaveAccountPress}>
          <Text style={styles.dontHaveText}>
            {'Don’t have an account?'}
            <Text style={styles.boldText}>{' Sign up'}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </AuthContainer>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  title: {
    fontSize: scale(30),
    fontWeight: 'bold',
    marginTop: verticalScale(10),
  },
  subTitle: {
    fontSize: scale(12),
    marginTop: verticalScale(4),
    color: theme.colors.grayLight,
  },
  inputBox: {
    // marginBottom: moderateScale(10),
  },
  button: {
    marginTop: verticalScale(10),
  },
  socialBtns: {
    marginTop: verticalScale(6),
    backgroundColor: theme.colors.white,
  },
  forgotText: {
    color: COLORS.appBlue,
    textAlign: 'right',
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  divider: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dontHaveText: {
    marginTop: verticalScale(5),
    fontSize: scale(14),
    color: COLORS.grayLight,
  },
  boldText: {
    color: COLORS.appBlue,
    fontWeight: 'bold',
  },
}));

export default LoginScreen;
