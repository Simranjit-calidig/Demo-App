import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Pressable, Keyboard, TouchableOpacity} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {HIT_POINT, moderateScale, scale, verticalScale} from '@utils/scaling';
import {AuthContainer} from '@components/molecules';
import {AppIcon} from '@assets/SVGs';
import {Button, Input, OrDivider, TextContainer} from '@components/atoms';
import {Formik} from 'formik';
import FORMIK from 'src/formik';
import {SharedStyles} from 'src/shared';
import {COLORS} from 'src/styles/themes';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from '@redux/hooks';
import {saveUserData} from '@redux/reducers/auth';
import {setItem} from 'src/services/apiService';
import {STORAGE} from '@constants/enum';
import {showMessage} from 'react-native-flash-message';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const {fields, schema} = FORMIK.SIGN_UP_WITH_EMAIL_PROVIDER;

const SignUp = ({navigation}) => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const {styles, theme} = useStyles(stylesheet);
  const [loading, setLoading] = useState(false);

  const onFormSubmit = async values => {
    Keyboard.dismiss?.();
    console.log('Values on Submit', values);
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(values?.email, values?.password)
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
          showMessage({
            message: 'That email address is already in use!',
            type: 'danger',
          });
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          showMessage({
            message: 'That email address is already in use!',
            type: 'danger',
          });
        }
        setLoading(false);
        console.error(error);
        showMessage({
          message: 'Something went wronge!',
          type: 'danger',
        });
      });
  };

  const alreadyHaveAccountPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <AuthContainer>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <AppIcon />
        </View>
        <Text style={styles.title}>{'Sign Up to your Account'}</Text>
        <Text style={styles.subTitle}>
          {'Enter your email and password to Sign Up '}
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
                {/* <TextContainer
                  onPress={onForgotPassPress}
                  text="Forgotten password?"
                  style={styles.forgotText}
                /> */}
                <Button
                  borderRadius={10}
                  title={'Sign Up'}
                  isLoading={loading}
                  onPress={handleSubmit}
                  containerStyle={styles.button}
                  isDisabled={
                    !values?.email ||
                    !values?.password ||
                    !values?.confirmPassword ||
                    errors?.email ||
                    errors?.password ||
                    errors?.confirmPassword
                  }
                />
                {/* <OrDivider containerStyles={styles.divider} /> */}
              </View>
            );
          }}
        </Formik>
      </View>
      <View style={SharedStyles.itemCenter}>
        <TouchableOpacity
          hitSlop={HIT_POINT}
          activeOpacity={0.7}
          onPress={alreadyHaveAccountPress}>
          <Text style={styles.dontHaveText}>
            {'Already have an account?'}
            <Text style={styles.boldText}>{' Sign In'}</Text>
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

export default SignUp;
