import React from 'react';
import * as Yup from 'yup';
import {TextContainer} from '@components/atoms';
import {COLORS} from 'src/styles/themes';
import {height, moderateScale, verticalScale} from '@utils/scaling';

export const REGEX = {
  USER_HANDLE: /^[a-z0-9_]+$/,
  WEBSITE_URL_REGEX:
    /^((https?|HTTPS?|ftp|smtp|Https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
  PHONE_REGEXP:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
};

const fields = {
  mobileNumber: {
    placeholder: 'Mobile Number',
    keyboardType: 'number-pad',
    autoCapitalize: 'none',
    maxLength: 10,
    type: 'mobileNumber',
  },
  age: {
    type: 'age',
    maxLength: 2,
    autoCapitalize: 'none',
    placeholder: 'Age',
    keyboardType: 'number-pad',
  },
  userhandle: {
    placeholder: 'User Handle',
    autoCapitalize: 'none',
    type: 'userhandle',
  },
  password: {
    placeholder: 'Password',
    type: 'password',
    autoCapitalize: 'none',
    password: true,
  },
  confirmPassword: {
    placeholder: 'Confirm Password',
    type: 'confirmPassword',
    autoCapitalize: 'none',
    password: true,
  },
  email: {
    placeholder: 'Email',
    // title: 'Enter your email ID',
    autoCapitalize: 'none',
    type: 'email',
    fieldStyle: {
      marginTop: verticalScale(10),
    },
  },
  currentPassword: {
    placeholder: '',
    title: 'Current password',
    type: 'currentPassword',
    autoCapitalize: 'none',
    password: true,
  },
  newPassword: {
    placeholder: '',
    title: 'New password',
    autoCapitalize: 'none',
    type: 'newPassword',
    password: true,
  },
  reNewPassword: {
    placeholder: '',
    title: 'Re-enter password',
    autoCapitalize: 'none',
    type: 'reNewPassword',
    password: true,
  },
  name: {
    placeholder: 'Name',
    autoCapitalize: 'none',
    type: 'name',
  },
  gender: {
    placeholder: 'Gender',
    type: 'gender',
  },
  description: {
    placeholder: '',
    type: 'description',
    title: 'Tagline',
    autoCapitalize: 'none',
    multiline: true,
    numberOfLines: 3,
    fieldStyle: {
      textAlignVertical: 'top',
      minHeight: verticalScale(100),
      maxHeight: verticalScale(100),
    },
  },
  bioSomeElse: {
    placeholder:
      'It’s how the hoobahoo will describe themselves, it will act as their profile’s bio.',
    type: 'description',
    title: 'Tagline',
    multiline: true,
    autoCapitalize: 'none',
    numberOfLines: 3,
    fieldStyle: {
      textAlignVertical: 'top',
      minHeight: verticalScale(70),
      maxHeight: verticalScale(70),
    },
  },
  bioYourOwn: {
    placeholder:
      'It’s how your hoobahoo will describe themselves, it will act as their profile’s bio.',
    type: 'description',
    title: 'Tagline',
    multiline: true,
    numberOfLines: 3,
    autoCapitalize: 'none',
    fieldStyle: {
      textAlignVertical: 'top',
      minHeight: verticalScale(100),
      maxHeight: verticalScale(100),
    },
  },
  bio: {
    placeholder:
      "A character can be any letter, number, punctuation, special character, or space. Each of these characters takes up one byte of space in a computer's relation.",
    type: 'bio',
    title: 'Edit bio',
    multiline: true,
    autoCapitalize: 'none',
    numberOfLines: 6,
    fieldStyle: {
      textAlignVertical: 'top',
      minHeight: verticalScale(100),
      maxHeight: verticalScale(100),
    },
  },
  handleAi: {
    placeholder: 'Handle',
    type: 'handleAi',
    autoCapitalize: 'none',
    rightIcon: (
      <TextContainer
        style={{color: COLORS.white, paddingRight: moderateScale(5)}}
        text=".ai"
      />
    ),
  },
  handleAi2: {
    placeholder: 'Handle',
    autoCapitalize: 'none',
    type: 'handleAi',
  },
  ownHandleAi: {
    placeholder: 'Handle',
    autoCapitalize: 'none',
    type: 'handleAi',
    editable: false,
    rightIcon: (
      <TextContainer
        style={{color: COLORS.white, paddingRight: moderateScale(5)}}
        text=".ai"
      />
    ),
  },
  dob: {
    placeholder: 'DD/MM/YYYY',
    title: 'Date of Birth',
    type: 'dob',
  },
  createHandle: {
    placeholder: 'Create Handle, for ex: john_smith1',
    autoCapitalize: 'none',
    type: 'userhandle',
  },
  visibility: {
    type: 'visibility',
  },
};

const MAX_BIO_LENGTH = 150;

const schemas = {
  stringRequired: Yup.string().required('Required'),
  stringRequired2: Yup.string()
    .trim()
    .min(2, 'Must be at least 2 characters')
    .required('Required'),
  stringOptional: Yup.string()
    .trim()
    .min(2, 'Must be at least 2 characters')
    .optional(),
  email: Yup.string().email().required('Required'),
  description: Yup.string()
    .max(100, 'Should be 100 character only')
    .required('Required'),
  descriptionOptinal: Yup.string().max(100, 'Should be 100 character only'),
  bio: Yup.string()
    .max(MAX_BIO_LENGTH, 'Should be 100 character only')
    .required('Required'),
  bioOptional: Yup.string().max(MAX_BIO_LENGTH, 'Should be 100 character only'),
  age: Yup.number('only number')
    .positive('Age must be a positive number.')
    .integer('Age must be an integer.')
    .min(1, 'Age must be at least 1 years old.')
    .max(100, 'Age must be at most 100 years old.'),
  userHandle: Yup.string()
    .matches(REGEX.USER_HANDLE, 'Please Enter Correct User Handle')
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
  emailOptional: Yup.string().email().optional(),
  phoneRequired: Yup.string().length(10).required('Required'),
  phoneOptional: Yup.string().length(10).optional(),
  pincode: Yup.string()
    .matches(REGEX.PINCODE_REGEX, 'Pincode is not vaild')
    .length(6)
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(REGEX.PHONE_REGEXP, 'Phone number is not valid')
    .min(10, 'Please enter mobile number')
    .required('Required'),
  numberInput: Yup.number().optional(),
  numberInputRequired: Yup.number('Only Number Allowed')
    .typeError('Amount must be a number')
    .required('This Field is Required'),
  ifscValidation: Yup.string()
    .matches(REGEX.IFSC_REGEX, 'Please Enter Correct IFSC Code')
    .required('This Field is Required'),
  panValidation: Yup.string()
    .matches(REGEX.PAN_REGEX, 'Please Enter Correct PAN Number')
    .required('This Field is Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Password must match')
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
  newPassword: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), ''], 'Password must match')
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  reNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), ''], 'Password must match')
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
};

export default {
  LOG_IN_PROVIDER: {
    fields: [fields.userhandle, fields.password],
    schema: Yup.object().shape({
      userhandle: schemas.userHandle,
      password: schemas.password,
    }),
  },
  LOGIN_IN_WITH_EMAIL_PROVIDER: {
    fields: [fields.email, fields.password],
    schema: Yup.object().shape({
      email: schemas.email,
      password: schemas.password,
    }),
  },
  SIGN_UP_WITH_EMAIL_PROVIDER: {
    fields: [fields.email, fields.password, fields.confirmPassword],
    schema: Yup.object().shape({
      email: schemas.email,
      password: schemas.password,
      confirmPassword: schemas.passwordConfirm,
    }),
  },
  EMAIL_PROVIDER: {
    fields: [fields.email],
    schema: Yup.object().shape({
      email: schemas.email,
    }),
  },
  RESET_PASSWORD_PROVIDER: {
    fields: [fields.newPassword, fields.reNewPassword],
    schema: Yup.object().shape({
      newPassword: schemas.newPassword,
      reNewPassword: schemas.reNewPassword,
    }),
  },
  SIGN_UP_PROVIDER: {
    fields: [fields.name, fields.gender, fields.dob, fields.createHandle],
    schema: Yup.object().shape({
      name: schemas.stringRequired,
      gender: schemas.stringRequired,
      dob: schemas.stringRequired,
      userhandle: schemas.userHandle,
    }),
  },
  PERSONAL_DETAILS_PROVIDER: {
    fields: [
      fields.name,
      fields.gender,
      fields.dob,
      fields.createHandle,
      fields.password,
      fields.confirmPassword,
    ],
    schema: Yup.object().shape({
      name: schemas.stringRequired,
      gender: schemas.stringRequired,
      dob: schemas.stringRequired,
      userhandle: schemas.userHandle,
      password: schemas.password,
      confirmPassword: schemas.passwordConfirm,
    }),
  },
  PROFILE_RESET_PASSWORD: {
    fields: [fields.currentPassword, fields.newPassword, fields.reNewPassword],
    schema: Yup.object().shape({
      currentPassword: schemas.password,
      newPassword: schemas.newPassword,
      reNewPassword: schemas.reNewPassword,
    }),
  },
};
