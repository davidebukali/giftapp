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
import { VendorState, initVendors } from '../Gift/giftSlice';
import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../app/store';
import NoData from '../../components/NoData';
import { API_URL } from '../../utils/constants';

const { width } = Dimensions.get('window');
const Vendor = ({ navigation }) => {
  const [vendors, setVendors] = useState<VendorState[]>([]);
  useEffect(() => {
    fetchVendors().then((data) => {
      setVendors(data);
    });
  }, []);

  const fetchVendors = async () => {
    const response = await fetch(`${API_URL}/vendors`);
    return response.json();
  };

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
        ListEmptyComponent={<NoData />}
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

export default Vendor;
