import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { VendorState, initVendors, selectVendors } from './giftSlice';
import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';

const { width } = Dimensions.get('window');
const GiftVendor = ({ navigation }) => {
  const [vendors, setVendors] = useState<VendorState[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initVendors())
      .then(unwrapResult)
      .then((data) => {
        setVendors(data);
      });
  }, []);

  return (
    <SafeAreaView
      style={{
        width: width,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <FlatList
        numColumns={2}
        data={vendors}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('GiftList', {
                  vendorId: item.id,
                })
              }
            >
              <View style={styles.item}>
                <Image
                  source={require('../../../assets/placeholder.png')}
                  style={styles.image}
                />
                <Text style={styles.text}>{item.name}</Text>
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
  item: {
    maxWidth: '100%',
    height: 150,
    padding: 10,
  },
  image: {
    marginBottom: 10,
  },
  text: {
    alignContent: 'center',
  },
});

export default GiftVendor;
