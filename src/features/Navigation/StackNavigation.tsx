import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DrawerNavigation from './DrawerNavigation';
import AddReminder from '../Reminders/AddReminder';
import ViewReminder from '../Reminders/ViewReminder';
import GiftCategory from '../Gift/GiftCategory';
import GiftList from '../Gift/GiftList';
import ViewGift from '../Gift/ViewGift';
import { Badge, Button, IconButton, MD3Colors } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cart from '../Orders/Cart';
import ViewOrder from '../Orders/ViewOrder';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <View>
            <Badge visible={true} style={styles.badge}>
              3
            </Badge>
            <IconButton
              mode="outlined"
              icon="cart"
              iconColor={MD3Colors.secondary50}
              size={25}
              onPress={() => {
                navigation.navigate('Cart');
              }}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="Root"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AddReminder" component={AddReminder} />
      <Stack.Screen name="ViewReminder" component={ViewReminder} />

      <Stack.Screen name="GiftCategory" component={GiftCategory} />
      <Stack.Screen name="GiftList" component={GiftList} />
      <Stack.Screen name="ViewGift" component={ViewGift} />

      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ViewOrder" component={ViewOrder} />
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