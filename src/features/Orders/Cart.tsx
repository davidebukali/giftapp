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
  Button,
  Checkbox,
  Divider,
  IconButton,
  MD3Colors,
  Searchbar,
  TextInput,
} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const Cart = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Order</Text>
      <View style={styles.cartItem}>
        <Text>Lemon</Text>
      </View>
      <Divider />
      <View style={styles.cartItem}>
        <Text>Lemon</Text>
      </View>
      <Divider />
      <View style={styles.cartItem}>
        <Text>Lemon</Text>
      </View>
      <Divider />
      <View style={styles.deliveryDetails}>
        <Text style={styles.header}>Delivery Details</Text>
        <TextInput
          label="Where should we deliver your gift ?"
          multiline={true}
          // onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.deliveryDetails}>
        <Text style={styles.header}>Summary</Text>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryTextQty}>Lemon</Text>
          <Text style={styles.summaryTextLeft}>Lemon</Text>
          <Text style={styles.summaryTextRight}>Lemon</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryTextQty}>Lemon</Text>
          <Text style={styles.summaryTextLeft}>Lemon</Text>
          <Text style={styles.summaryTextRight}>Lemon</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryTextQty}>Lemon</Text>
          <Text style={styles.summaryTextLeft}>Lemon</Text>
          <Text style={styles.summaryTextRight}>Lemontear</Text>
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
    margin: 10,
    padding: 10,
  },
  deliveryDetails: {
    backgroundColor: '#D3D3D3',
    margin: 10,
  },
  summaryItem: {
    fontSize: 18,
    margin: 10,
    flexDirection: 'row',
  },
  summaryTextQty: {
    fontWeight: 'bold',
  },
  summaryTextLeft: {
    marginLeft: 20,
  },
  summaryTextRight: {
    marginLeft: 180,
  },
  buyGift: {
    padding: 10,
    margin: 10,
  },
  outerContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 5,
  },
});

export default Cart;
