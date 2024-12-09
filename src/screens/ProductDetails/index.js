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

const ProductDetails = ({navigation}) => {
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

export default ProductDetails;
