import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import { Searchbar } from 'react-native-paper';

const { width } = Dimensions.get('window');
const GiftList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={{ width: width }}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.search}
      />
      <View style={[styles.container, { width: width }]}>
        <Pressable onPress={() => navigation.navigate('ViewGift')}>
          <View style={styles.item}>
            <Image
              source={require('../../../assets/placeholder.png')}
              style={styles.image}
            />
            <Text style={styles.giftname}>{'Red velvet'}</Text>
            <Text style={styles.giftprice}>{'100,000/='}</Text>
          </View>
        </Pressable>
        <View style={styles.item}>
          <Image
            source={require('../../../assets/placeholder.png')}
            style={styles.image}
          />
          <Text style={styles.giftname}>{'Black forest'}</Text>
          <Text style={styles.giftprice}>{'150,000/='}</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../../assets/placeholder.png')}
            style={styles.image}
          />
          <Text style={styles.giftname}>{'Strawberry Muffins'}</Text>
          <Text style={styles.giftprice}>{'50,000/='}</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../../assets/placeholder.png')}
            style={styles.image}
          />
          <Text style={styles.giftname}>{'Fruit cakes'}</Text>
          <Text style={styles.giftprice}>{'70,000/='}</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../../assets/placeholder.png')}
            style={styles.image}
          />
          <Text style={styles.giftname}>{'Cake loaf'}</Text>
          <Text style={styles.giftprice}>{'60,000/='}</Text>
        </View>
      </View>
    </View>
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
    maxWidth: '50%',
    height: 150,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    marginBottom: 10,
  },
  giftname: {
    alignContent: 'center',
  },
  giftprice: {
    fontWeight: 'bold',
  },
  search: {
    margin: 10,
  },
});

export default GiftList;
