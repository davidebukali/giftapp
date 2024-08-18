import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DrawerNavigation from './DrawerNavigation';
import AddReminder from '../Reminders/AddReminder';
import ViewReminder from '../Reminders/ViewReminder';
import Vendor from '../Vendors/Vendor';
import GiftList from '../Gift/GiftList';
import ViewGift from '../Gift/ViewGift';
import OrderAddress from '../Orders/OrderAddress';
import { Badge, Button, IconButton, MD3Colors } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cart from '../Orders/Cart';
import Payments from '../Orders/Payments';
import ViewOrder from '../Orders/ViewOrder';
import { useSelector } from 'react-redux';
import { countCartItems } from '../Orders/orderSlice';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();
  const cartCounter = useSelector(countCartItems);
  const cartButton = {
    headerRight: () => (
      <View>
        {cartCounter > 0 && (
          <Badge visible={true} style={styles.badge}>
            {cartCounter}
          </Badge>
        )}
        <IconButton
          mode="outlined"
          icon="cart"
          iconColor={MD3Colors.secondary50}
          size={25}
          onPress={() => {
            cartCounter > 0 && navigation.navigate('Cart');
          }}
        />
      </View>
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AddReminder" component={AddReminder} />
      <Stack.Screen name="ViewReminder" component={ViewReminder} />

      <Stack.Screen
        name="GiftCategory"
        component={Vendor}
        options={cartButton}
      />
      <Stack.Screen
        name="GiftList"
        component={GiftList}
        options={{ ...cartButton, headerTitle: 'Select Gift' }}
      />
      <Stack.Screen
        name="ViewGift"
        component={ViewGift}
        options={{ ...cartButton, headerTitle: 'Gift Details' }}
      />

      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen
        name="ViewOrder"
        component={ViewOrder}
        options={{ headerTitle: 'Confirmed' }}
      />
      <Stack.Screen name="Address" component={OrderAddress} />
      <Stack.Screen name="Payment" component={Payments} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  badge: {
    top: 10,
    position: 'absolute',
    right: 45,
  },
});

export default StackNavigation;
