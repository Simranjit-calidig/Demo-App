import {Platform} from 'react-native';

export default {
  ...Platform.select({
    ios: {
      // example font family
      // nunitoBlack: 'Nunito Sans 10pt Black',
    },
    android: {
      // example font family
      // nunitoBlack: 'NunitoSansBlack',
    },
  }),
};
