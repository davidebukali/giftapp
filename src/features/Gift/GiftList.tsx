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
import { List, Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    name: 'First Item',
    price: 'First',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    price: 'Second',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e272',
    name: 'Third Item',
    price: 'Third',
  },
];

const GiftList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

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
        style={styles.search}
      />
      <FlatList
        data={DATA}
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
  search: {
    // margin: 10,
  },
});

export default GiftList;
