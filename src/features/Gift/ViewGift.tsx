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
  IconButton,
  MD3Colors,
  Searchbar,
} from 'react-native-paper';

const { width } = Dimensions.get('window');
const ViewGift = ({ navigation }) => {
  return (
    <View style={{ width: width }}>
      <View style={[styles.container, { width: width }]}>
        <Pressable onPress={() => console.log('Pressed')}>
          <Image
            source={require('../../../assets/placeholder.png')}
            style={styles.defaultGalleryImage}
          />
        </Pressable>
        <Text style={[styles.giftname, styles.text]}>Black forest</Text>
        <Text style={[styles.giftprice, styles.text]}>500,000/=</Text>
        <Text style={[styles.giftdescription, styles.text]}>
          This is how we roll in the mix
        </Text>
        <View style={styles.checkbox}>
          <Checkbox.Item
            label="Eggless"
            status={'unchecked'}
            onPress={() => {
              console.log('Checked');
            }}
          />
          <Checkbox.Item
            label="No sugar"
            status={'unchecked'}
            onPress={() => {
              console.log('Checked');
            }}
          />
        </View>
      </View>
      <View style={styles.addProduct}>
        <IconButton
          mode="contained"
          icon="minus"
          iconColor={MD3Colors.secondary50}
          size={40}
          onPress={() => console.log('Pressed')}
        />
        <Text style={styles.giftNumber}>1</Text>
        <IconButton
          mode="contained"
          icon="plus"
          iconColor={MD3Colors.secondary50}
          size={40}
          onPress={() => console.log('Pressed')}
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
  search: {
    margin: 10,
  },
  checkbox: {
    marginTop: 10,
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
