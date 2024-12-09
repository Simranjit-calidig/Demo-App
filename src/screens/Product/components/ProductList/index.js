import React, {Fragment} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {
  moderateScale,
  SCREEN_PADDING,
  verticalScale,
  width,
} from '@utils/scaling';
import {COLORS} from 'src/styles/themes';
import {SharedStyles} from 'src/shared';
import {EllipsisVertical} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

const SalesCard = ({
  containerStyles = {},
  id = '',
  title = '',
  brand = '',
  price = '',
  stock = '',
  variants = '',
  imageUri = '',
}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  const onProductPress = () => {
    console.log('Product', title);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onProductPress}
      style={[styles.container, containerStyles]}>
      <View style={styles.topSection}>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subtitle}>{brand}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity>
          <EllipsisVertical color={COLORS.grayLight} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.info}>
          <Text style={styles.label}>ID </Text>
          {id}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>STOCK </Text>
          {stock}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>VAR </Text>
          {variants}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#7e7e7e',
    marginTop: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginHorizontal: 10,
  },
  moreOptions: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7e7e7e',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
  },
  info: {
    fontSize: 12,
    color: '#7e7e7e',
  },
  label: {
    fontWeight: '700',
    color: '#000',
  },
}));

export default SalesCard;
