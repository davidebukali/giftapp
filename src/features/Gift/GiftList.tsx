import React, { useEffect, useMemo } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { List, Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import { initProducts, selectAllGifts } from './giftSlice';
import { useAppDispatch } from '../../app/store';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import NoData from '../../components/NoData';

const GiftList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { params } = useRoute();
  const dispatch = useAppDispatch();
  const gifts = useSelector(selectAllGifts);
  const filteredGifts = useMemo(() => {
    const data = gifts.filter(function (gift) {
      return gift.name.toLowerCase().indexOf(searchQuery) != -1;
    });
    return searchQuery ? data : [];
  }, [searchQuery]);
  useEffect(() => {
    dispatch(initProducts(params?.vendorId));
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
        onChangeText={(searchText: string) => {
          setSearchQuery(searchText);
        }}
        value={searchQuery}
      />
      <FlatList
        data={filteredGifts && filteredGifts.length > 0 ? filteredGifts : gifts}
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
