import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectGiftById, updateExtras } from './giftSlice';
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from '../Orders/orderSlice';
import { useRoute } from '@react-navigation/native';
import { RootState, useAppDispatch } from '../../app/store';
import Extras from './Extras';

const { width } = Dimensions.get('window');
const ViewGift = ({ navigation }) => {
  const { params } = useRoute();
  const dispatch = useAppDispatch();
  const gift = useSelector((state: RootState) =>
    selectGiftById(state, params?.giftId),
  );
  const cartItems = useSelector(selectCartItems);

  const renderGiftQuantity = () => {
    const currentCartItem = cartItems.find(
      (item) => item.productId === gift.id,
    );
    return currentCartItem ? currentCartItem.quantity : '_';
  };

  const toggleCheckbox = (checkboxId: string) => {
    dispatch(updateExtras({ id: gift.id, checkboxId }));
  };

  if (!params?.giftId) {
    navigation.navigate('Gifts');
  }

  return (
    <View style={{ width: width }}>
      <View style={[styles.container, { width: width }]}>
        <Pressable onPress={() => console.log('Pressed')}>
          <Image
            source={require('../../../assets/placeholder.png')}
            style={styles.defaultGalleryImage}
          />
        </Pressable>
        <Text style={[styles.giftname, styles.text]}>{gift.name}</Text>
        <Text style={[styles.giftprice, styles.text]}>{gift.price}</Text>
        <Text style={[styles.giftdescription, styles.text]}>
          {gift.description}
        </Text>
        {gift.extras.length > 0 && (
          <Extras data={gift.extras} toggleCheckbox={toggleCheckbox} />
        )}
      </View>
      <View style={styles.addProduct}>
        <IconButton
          mode="contained"
          icon="minus"
          iconColor={MD3Colors.secondary50}
          size={40}
          onPress={() =>
            dispatch(
              removeFromCart({
                productId: gift.id,
              }),
            )
          }
        />
        <Text style={styles.giftNumber}>{renderGiftQuantity()}</Text>
        <IconButton
          mode="contained"
          icon="plus"
          iconColor={MD3Colors.secondary50}
          size={40}
          onPress={() =>
            gift &&
            dispatch(
              addToCart({
                productId: gift.id,
                name: gift.name,
                cost: gift.price,
                quantity: 1,
              }),
            )
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
  },
  defaultGalleryImage: {
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    marginBottom: 5,
  },
  giftname: {
    fontSize: 25,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  giftprice: {
    fontSize: 18,
  },
  giftdescription: {
    marginTop: 40,
    fontSize: 18,
  },
  addProduct: {
    marginTop: 50,
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  giftNumber: {
    fontSize: 18,
    margin: 10,
    marginTop: 20,
  },
});

export default ViewGift;
