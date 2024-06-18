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
import {
  DataTable,
  Button,
  Checkbox,
  Divider,
  IconButton,
  MD3Colors,
  Searchbar,
  TextInput,
  HelperText,
} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const Cart = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Order</Text>
      <View style={styles.orderList}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Gift</DataTable.Title>
            <DataTable.Title numeric>Qty</DataTable.Title>
            <DataTable.Title numeric>Price</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Chocolate muffins</DataTable.Cell>
            <DataTable.Cell numeric>3</DataTable.Cell>
            <DataTable.Cell numeric>20,000/=</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Red velvet</DataTable.Cell>
            <DataTable.Cell numeric>1</DataTable.Cell>
            <DataTable.Cell numeric>200,000/=</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View style={styles.deliverySummary}>
        <View style={styles.deliveryDetails}>
          <Text>Names</Text>
          <TextInput
            label="Who should we deliver this to ?"
            // onChangeText={text => setText(text)}
          />
        </View>

        <View style={styles.deliveryDetails}>
          <Text>Delivery Details</Text>
          <TextInput
            label="Where should we deliver your gift ?"
            multiline={true}
            // onChangeText={text => setText(text)}
          />
          <HelperText type="info">
            If possible, include a google pin to help the delivery man.
          </HelperText>
        </View>

        <View style={styles.deliveryDetails}>
          <Text>Delivery contact</Text>
          <TextInput
            keyboardType="numeric"
            label="Phone number of the person to deliver this gift"
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
});

export default Cart;
