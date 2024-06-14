import React, { useEffect, useMemo, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
import { List, Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import {
  ProductState,
  addFilteredProduct,
  initProducts,
  resetFilteredProduct,
  selectFilteredProducts,
} from './giftSlice';
import { useAppDispatch } from '../../app/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import NoData from '../../components/NoData';

const GiftList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = useState<ProductState[]>([]);
  const { params } = useRoute();
  const dispatch = useAppDispatch();
  const filteredProductsFromState = useSelector(selectFilteredProducts);
  const filteredProducts = useMemo(() => {
    return products.filter(function (product) {
      return product.name.toLowerCase().indexOf(searchQuery) != -1;
    });
  }, [searchQuery]);
  useEffect(() => {
    dispatch(initProducts(params?.vendorId))
      .then(unwrapResult)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchProducts = (searchText: string) => {
    setSearchQuery(searchText);
    if (searchText.length > 0) {
      dispatch(addFilteredProduct(filteredProducts));
    } else {
      dispatch(resetFilteredProduct());
    }
  };

  const renderGiftList = ({ item }) => {
    return (
      <List.Item
        style={styles.listItem}
        key={item.id}
        title={item.name}
        description={() => {
          return (
            <View>
              <Text style={styles.listDescription}>{item.price}</Text>
            </View>
          );
        }}
        left={() => {
          return (
            <Image
              style={styles.listImage}
              source={require('../../../assets/placeholder.png')}
            />
          );
        }}
        contentStyle={{ padding: 0, margin: 0, top: 0 }}
        titleStyle={styles.listTitle}
        onPress={() => {
          navigation.navigate('ViewGift');
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={searchProducts}
        value={searchQuery}
      />
      <FlatList
        data={
          filteredProductsFromState && filteredProductsFromState.length > 0
            ? filteredProductsFromState
            : products
        }
        renderItem={renderGiftList}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<NoData />}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listItem: { padding: 0, margin: 0 },
  listTitle: { padding: 0, margin: 0, fontSize: 20, marginTop: 5 },
  listDescription: { fontSize: 15 },
  listSubDescription: { fontSize: 14, fontStyle: 'italic', marginTop: 5 },
  listImage: {
    width: '40%',
    padding: 0,
    margin: 0,
  },
});

export default GiftList;
