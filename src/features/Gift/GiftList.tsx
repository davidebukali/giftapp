import React, { useState } from 'react';
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
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    name: 'First Item',
    price: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    price: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    price: 'Third Item',
  },
];

const GiftList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.search}
      />
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate('ViewGift')}>
              <View style={styles.item}>
                <Image
                  source={require('../../../assets/placeholder.png')}
                  style={styles.image}
                />
                <Text style={styles.giftname}>{item.name}</Text>
                <Text style={styles.giftprice}>{item.price}</Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    gap: 10,
  },
  item: {
    maxWidth: '100%',
    height: 150,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    marginBottom: 10,
  },
  giftname: {
    alignContent: 'center',
    width: '100%',
  },
  giftprice: {
    fontWeight: 'bold',
    width: '100%',
  },
  search: {
    margin: 10,
  },
});

export default GiftList;
