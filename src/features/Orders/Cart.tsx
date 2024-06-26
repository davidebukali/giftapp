import React, { useMemo, useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import {
  DataTable,
  Button,
  Checkbox,
  Text,
  IconButton,
  MD3Colors,
  Searchbar,
  TextInput,
  HelperText,
  Card,
  Avatar,
} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRecipientContact,
  addRecipientNames,
  selectCartItems,
  selectOrder,
} from '../Orders/orderSlice';
import { currencyFormat } from '../../utils/index';
import { SERVICE_FEE } from '../../utils/constants';
import { Cart as CartType } from './orderSlice';

interface OrderSummaryItems {
  title: string;
  value: number;
}

export const renderCart = (cartItems: CartType[]) => {
  return cartItems.map((cartItem) => (
    <DataTable.Row key={cartItem.productId}>
      <DataTable.Cell textStyle={styles.cellText} style={{ flex: 3 }}>
        {cartItem.name}
      </DataTable.Cell>
      <DataTable.Cell>x{cartItem.quantity}</DataTable.Cell>
      <DataTable.Cell numeric>
        {parseInt(cartItem.cost) * cartItem.quantity}
      </DataTable.Cell>
    </DataTable.Row>
  ));
};

const renderOrderSummary = (orderSummaryItems: OrderSummaryItems[]) => {
  return orderSummaryItems.map((item) => {
    return (
      <DataTable.Row key={item.title}>
        <DataTable.Cell
          textStyle={item.title == 'Total' ? styles.total : styles.cellText}
        >
          {item.title}
        </DataTable.Cell>
        <DataTable.Cell
          textStyle={item.title == 'Total' ? styles.total : styles.cellText}
          numeric
        >
          {currencyFormat(item.value)}
        </DataTable.Cell>
      </DataTable.Row>
    );
  });
};

const Cart = ({ navigation }) => {
  const cartItems = useSelector(selectCartItems);
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();
  const sumProductCost = useMemo(() => {
    return order.products.reduce(
      (acc, item) => parseInt(item.cost) * item.quantity + acc,
      0,
    );
  }, [order]);

  const orderSummaryItems = useMemo<OrderSummaryItems[]>(() => {
    return [
      {
        title: 'Delivery',
        value: 20000, // get this from server
      },
      {
        title: 'Service charges',
        value: SERVICE_FEE,
      },
      {
        title: 'Products',
        value: sumProductCost,
      },
      {
        title: 'Total',
        value: sumProductCost + SERVICE_FEE + 20000,
      },
    ];
  }, [sumProductCost]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Order</Text>
      <View style={styles.orderList}>
        <DataTable>{renderCart(cartItems)}</DataTable>
      </View>

      <View style={styles.deliverySummary}>
        <View style={styles.deliveryDetails}>
          <TextInput
            label="Names of the recipient ?"
            value={order.recipientNames}
            onChangeText={(names) =>
              dispatch(
                addRecipientNames({
                  names,
                }),
              )
            }
          />
        </View>

        <View style={styles.deliveryCard}>
          <Card onPress={() => navigation.navigate('Address')}>
            <Card.Cover source={require('../../../assets/kampalamap.jpg')} />
            <Card.Content>
              <Text variant="bodyMedium" style={styles.deliveryAddress}>
                {order.deliveryCoordinates
                  ? 'Address saved'
                  : 'Set a delivery address'}
              </Text>
            </Card.Content>
          </Card>
        </View>

        <View style={styles.deliveryDetails}>
          <TextInput
            keyboardType="numeric"
            label="Phone number of the gift recipient"
            value={order.deliveryContact}
            onChangeText={(contact) =>
              dispatch(
                addRecipientContact({
                  contact,
                }),
              )
            }
          />
        </View>
      </View>

      <View style={styles.deliverySummary}>
        <Text style={styles.header}>Summary</Text>
        <View style={styles.orderList}>
          <DataTable>{renderOrderSummary(orderSummaryItems)}</DataTable>
        </View>
      </View>

      <View style={styles.outerContainer}>
        <Button
          mode="contained"
          style={styles.buyGift}
          onPress={() => {
            navigation.navigate('ViewOrder');
          }}
        >
          Order
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
  cartItem: {
    fontSize: 18,
  },
  deliveryDetails: {
    // backgroundColor: '#D3D3D3',
    margin: 5,
  },
  total: {
    fontWeight: 'bold',
  },
  orderList: {
    margin: 5,
  },
  deliverySummary: {
    marginTop: 20,
  },
  outerContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 5,
  },
  cellText: {
    fontWeight: 'normal',
  },
  deliveryCard: {
    marginBottom: 20,
    marginTop: 20,
    margin: 5,
  },
  deliveryAddress: {
    margin: 10,
    fontWeight: 'bold',
  },
});

export default Cart;
