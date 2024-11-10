import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCartItems } from './orderSlice';
import PayWithFlutterwave from 'flutterwave-react-native';
import { SERVICE_FEE } from '../../utils/constants';

interface RedirectParams {
  status: 'successful' | 'cancelled';
  transaction_id?: string;
  tx_ref: string;
}

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

  /* A function called when transaction is completed successfully or canceled */
  const handleOnRedirect = (data: RedirectParams) => {
    console.log('handleOnRedirect', data);
    // {"status": "successful", "transaction_id": "1625462816", "tx_ref": "flw_tx_ref_H7rOiC6XVb"}
    if (data.status == 'successful') {
      navigation.navigate('ViewOrder');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.paymentTitle]}>
        <Text style={styles.header}>Service Charges</Text>
        <Text style={styles.subheader}>- {SERVICE_FEE}/=</Text>
      </View>
      <View style={[styles.paymentButton, { flex: 1 }]}>
        <PayWithFlutterwave
          onRedirect={handleOnRedirect}
          options={{
            tx_ref: generateTransactionRef(10),
            authorization: 'FLWPUBK-2172aa7b5a4d9a5093b5db567c5f2c48-X',
            customer: {
              email: 'mail@example.com',
            },
            amount: 2000,
            currency: 'UGX',
            payment_options: 'card, mobilemoneyuganda',
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
  paymentTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
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
