import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectCartItems, selectOrder } from '../Orders/orderSlice';

const { width } = Dimensions.get('window');
const Cart = ({ navigation }) => {
  const cartItems = useSelector(selectCartItems);
  const order = useSelector(selectOrder);

  const renderCart = () => {
    return cartItems.map((cartItem) => (
      <DataTable.Row key={cartItem.productId}>
        <DataTable.Cell textStyle={styles.cellText} style={{ flex: 3 }}>
          {cartItem.name}
        </DataTable.Cell>
        <DataTable.Cell>x{cartItem.quantity}</DataTable.Cell>
        <DataTable.Cell numeric>{cartItem.cost}</DataTable.Cell>
      </DataTable.Row>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Order</Text>
      <View style={styles.orderList}>
        <DataTable>{renderCart()}</DataTable>
      </View>

      <View style={styles.deliverySummary}>
        <View style={styles.deliveryDetails}>
          <TextInput
            label="Who should we deliver this to ?"
            // onChangeText={text => setText(text)}
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
            // onChangeText={text => setText(text)}
          />
        </View>
      </View>

      <View style={styles.deliverySummary}>
        <Text style={styles.header}>Summary</Text>
        <View style={styles.orderList}>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>Delivery</DataTable.Cell>
              <DataTable.Cell numeric>10,000/=</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Service Fee</DataTable.Cell>
              <DataTable.Cell numeric>15,000/=</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Products</DataTable.Cell>
              <DataTable.Cell numeric>115,000/=</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell textStyle={styles.total}>Total</DataTable.Cell>
              <DataTable.Cell textStyle={styles.total} numeric>
                150,000/=
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
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
    width: '100%',
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
