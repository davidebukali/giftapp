import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { useSelector } from 'react-redux';
import { Cart, selectCartItems } from './orderSlice';
import PayWithFlutterwave from 'flutterwave-react-native';
import { SERVICE_FEE } from '../../utils/constants';
// or import PayWithFlutterwave from 'flutterwave-react-native';

interface RedirectParams {
  status: 'successful' | 'cancelled';
  transaction_id?: string;
  tx_ref: string;
}

/* An example function called when transaction is completed successfully or canceled */
const handleOnRedirect = (data: RedirectParams) => {
  console.log(data);
};

/* An example function to generate a random transaction reference */
const generateTransactionRef = (length: number) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `flw_tx_ref_${result}`;
};

const Payments = ({ navigation }) => {
  const cartItems = useSelector(selectCartItems);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Service Charges</Text>
      <Text style={styles.subheader}>{SERVICE_FEE}/=</Text>
      <View style={[styles.paymentButton, { flex: 1 }]}>
        <PayWithFlutterwave
          onRedirect={handleOnRedirect}
          options={{
            tx_ref: generateTransactionRef(10),
            authorization: '[00209010]',
            customer: {
              email: 'mail@example.com',
            },
            amount: 2000,
            currency: 'NGN',
            payment_options: 'card',
          }}
        />
      </View>

      <View style={styles.help}>
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
    </View>
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
    marginBottom: 20,
  },
  paymentButton: {
    margin: 10,
  },
  help: {
    backgroundColor: '#ebebeb',
    margin: 10,
    paddingBottom: 10,
    marginTop: 100,
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

export default Payments;
