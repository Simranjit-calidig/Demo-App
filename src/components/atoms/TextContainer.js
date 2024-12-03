import {scale} from '@utils/scaling';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  sectionTitle: {
    fontSize: scale(14),
    color: theme.colors.inputText,
  },
}));

const TextContainer = ({text, isDynamicText = false, style, ...rest}) => {
  const {t} = useTranslation();
  const {styles} = useStyles(stylesheet);
  return (
    <Text style={[styles.sectionTitle, style]} {...rest}>
      {isDynamicText ? text : t(text)}
    </Text>
  );
};

export default React.memo(TextContainer);
