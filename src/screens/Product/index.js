import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {scale, verticalScale} from '@utils/scaling';
import {HomeHeader, ScreenHeader} from '@components/molecules';
import {WrapperContainer, Input} from '@components/atoms';
import {Plus} from 'lucide-react-native';
import {ProductList} from './components';

const titles = [
  'Classic School Bag',
  'Eco-Friendly Backpack',
  'Waterproof Tote Bag',
  'Vintage Leather Bag',
  'Sports Duffel Bag',
  'Compact Sling Bag',
  'Stylish Handbag',
  'Travel Backpack',
  'Canvas Tote Bag',
  'Elegant Shoulder Bag',
  'Large Hiking Bag',
  'Minimalist Laptop Bag',
  'Expandable Carry-On Bag',
  'Casual Crossbody Bag',
  'Kids Cartoon Bag',
  'Designer Handbag',
  'Utility Messenger Bag',
  'Luxury Travel Bag',
  'Outdoor Gear Backpack',
  'Smart Bag with USB Port',
];

const IMGs = [
  'https://static.vecteezy.com/system/resources/previews/009/665/781/non_2x/school-bag-for-student-or-bag-for-kid-free-png.png',
  'https://png.pngtree.com/png-vector/20230907/ourmid/pngtree-colorful-cartoon-backpack-png-image_10013096.png',
  'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-a-travelling-bag-tent-storage-roll-vector-png-image_36973772.png',
  'https://www.transparentpng.com/thumb/women-bag/5n1fgv-red-textured-women-bag-png.png',
];

const productData = Array.from({length: 20}, (_, index) => ({
  id: `product-${index + 1}`,
  title: titles[Math.floor(Math.random() * titles.length)],
  brand: `Brand ${index + 1}`,
  price: (Math.random() * 100).toFixed(2),
  stock: Math.floor(Math.random() * 100),
  variants: Math.floor(Math.random() * 10) + 1,
  imageUri: IMGs[Math.floor(Math.random() * IMGs.length)],
}));

const ProductScreen = ({navigation}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = query => {
    setSearchText(query);
    if (query.trim() === '') {
      setFilteredProducts(productData);
    } else {
      const filtered = productData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <WrapperContainer withScreenPadding>
      <HomeHeader title="Product" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ScreenHeader
          title="Products List"
          text1="All Products "
          Icon={<Plus color={'white'} />}
          containerStyles={styles.screenHeader}
        />
        <Input
          value={searchText}
          onChangeText={handleSearch}
          placeholder="Search Product..."
          containerStyle={styles.searchInput}
        />

        {filteredProducts.map((item, index) => (
          <ProductList
            key={item.id}
            id={item.id}
            title={item.title}
            brand={item.brand}
            price={item.price}
            stock={item.stock}
            variants={item.variants}
            imageUri={item.imageUri}
          />
        ))}

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
    marginBottom: verticalScale(15),
  },
  searchInput: {
    marginBottom: verticalScale(10),
  },
  bottom: {
    height: 50,
  },
  marginT20: {
    marginTop: 20,
  },
}));

export default ProductScreen;
