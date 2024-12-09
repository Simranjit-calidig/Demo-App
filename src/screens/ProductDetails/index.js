import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {
  height,
  moderateScale,
  scale,
  SCREEN_PADDING,
  verticalScale,
  width,
} from '@utils/scaling';
import {HomeHeader, ScreenHeader} from '@components/molecules';
import {WrapperContainer, Input} from '@components/atoms';
import {ArrowLeft} from 'lucide-react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedStyles} from 'src/shared';
import {WebView} from 'react-native-webview';

const ProductDetails = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const {styles, theme} = useStyles(stylesheet);

  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  const product = route?.params?.data;

  const onBackPress = () => {
    if (navigation.canGoBack()) {
      navigation?.goBack?.();
    }
  };

  const insertTop =
    Platform.OS === 'ios' ? verticalScale(insets.top) : verticalScale(15);

  return (
    <WrapperContainer
    // withScreenPadding
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onBackPress}
          style={[styles.backBtn, {top: insertTop}]}>
          <ArrowLeft color={'black'} />
        </TouchableOpacity>
        <Image
          style={[
            styles.productImg,
            {
              paddingTop: insertTop,
            },
          ]}
          resizeMode="center"
          source={{uri: product?.imageUri}}
        />
        <View
          style={{
            paddingHorizontal: SCREEN_PADDING,
          }}>
          <View style={styles.topSection}>
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={1}>
                {product?.title}
              </Text>
              <Text style={styles.subtitle}>{product?.brand}</Text>
            </View>
            <Text style={styles.price}>{'$' + product?.price}</Text>
          </View>
          <View style={styles.bottomSection}>
            <Text style={styles.info}>
              <Text style={styles.label}>ID </Text>
              {product?.id}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.label}>STOCK </Text>
              {product?.stock}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.label}>VAR </Text>
              {product?.variants}
            </Text>
          </View>
          <Text style={styles.desc}>
            {
              "Drift into dreamland with our Serenity Sleep Sanctuary. This luxurious comforter is crafted with the finest hypoallergenic down alternative, ensuring a cozy and allergen-free sleep experience. The plush microfiber shell is soft to the touch and offers superior warmth without weight. Its elegant stitching and subtle sheen add a touch of sophistication to your bedroom decor. Available in a range of calming colors, the Serenity Sleep Sanctuary is the perfect choice for a restful night's sleep."
            }
          </Text>
        </View>
        <View style={styles.bottom} />
      </ScrollView>
    </WrapperContainer>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  backBtn: {
    left: 20,
    padding: 10,
    position: 'absolute',
    borderRadius: 10,
    ...SharedStyles.shadow,
    elevation: 8,
    backgroundColor: 'white',
    zIndex: 10,
  },
  productImg: {
    width: width,
    height: height / 2,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#7e7e7e',
    marginTop: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginHorizontal: 10,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopColor: '#e0e0e0',
    marginHorizontal: 10,
    paddingTop: 10,
  },
  info: {
    fontSize: 14,
    color: '#7e7e7e',
  },
  label: {
    fontWeight: '700',
    color: '#000',
  },
  desc: {
    color: '#53535c',
    marginTop: verticalScale(10),
    fontSize: theme.fontSize.md,
    textAlign: 'justify',
  },
}));

export default ProductDetails;
