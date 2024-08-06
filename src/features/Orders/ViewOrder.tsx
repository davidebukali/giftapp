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
} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { useSelector } from 'react-redux';
import { Cart, selectCartItems } from './orderSlice';

export const renderOrderSummary = (orderSummaryItems: Cart[]) => {
  return orderSummaryItems.map((summaryItem) => (
    <DataTable.Row key={summaryItem.productId}>
      <DataTable.Cell style={{ flex: 3 }}>{summaryItem.name}</DataTable.Cell>
      <DataTable.Cell>x{summaryItem.quantity}</DataTable.Cell>
      <DataTable.Cell numeric>
        {parseInt(summaryItem.cost) * summaryItem.quantity}
      </DataTable.Cell>
    </DataTable.Row>
  ));
};

const ViewOrder = ({ navigation }) => {
  const cartItems = useSelector(selectCartItems);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Order Confirmed</Text>
      <Text style={styles.subheader}>Gift for Tracy</Text>
      <View style={[styles.progress, { flex: 1 }]}>
        <ProgressSteps activeStep={2}>
          <ProgressStep label="Accepted" removeBtnRow={true}>
            <View style={{ alignItems: 'center' }}>
              <Text>
                We have received your order. Sit back and relax as we get things
                rolling.
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep label="Preparing" removeBtnRow={true}>
            <View style={{ alignItems: 'center' }}>
              <Text>Your gift is being prepared and packed for shipping.</Text>
            </View>
          </ProgressStep>
          <ProgressStep label="Delivering" removeBtnRow={true}>
            <View style={{ alignItems: 'center' }}>
              <Text>Your gift is en-route for delivery.</Text>
            </View>
          </ProgressStep>
          <ProgressStep label="Completed" removeBtnRow={true}>
            <View style={{ alignItems: 'center' }}>
              <Text>Your order was completed.</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
      <View style={styles.deliveryDetails}>
        <Text style={styles.header}>Summary</Text>
        <View style={styles.orderSummary}>
          <DataTable>{renderOrderSummary(cartItems)}</DataTable>
        </View>
      </View>

      <View style={styles.deliveryDetails}>
        <Text style={styles.helpheader}>Help</Text>
        <Text style={styles.helpsubheader}>
          Please call in case of any issues with your order.
        </Text>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryTextQty}>MTN</Text>
          <Text style={styles.summaryTextLeft}>0772 001098</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryTextQty}>Airtel</Text>
          <Text style={styles.summaryTextLeft}>0706 683141</Text>
        </View>
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
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
  progress: {
    marginBottom: 40,
  },
  cartItem: {
    fontSize: 18,
    margin: 10,
    padding: 10,
  },
  deliveryDetails: {
    backgroundColor: '#ebebeb',
    margin: 10,
    paddingBottom: 10,
  },
  orderSummary: {
    margin: 5,
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
  helpheader: {
    // fontWeight: 'bold',
    margin: 10,
    fontSize: 15,
  },
  helpsubheader: {
    margin: 10,
  },
});

export default ViewOrder;
