import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import { List, Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import { ProductState, initProducts } from './giftSlice';
import { useAppDispatch } from '../../app/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const GiftList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = useState<ProductState[]>([]);
  const { params } = useRoute();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initProducts(params?.vendorId))
      .then(unwrapResult)
      .then((data) => {
        console.log('Gift List', data);

        setProducts(data);
      });
  }, []);

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
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={products}
        renderItem={renderGiftList}
        keyExtractor={(item) => item.id}
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
