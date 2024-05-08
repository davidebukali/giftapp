import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DrawerNavigation from './DrawerNavigation';
import AddReminder from '../Reminders/AddReminder';
import ViewReminder from '../Reminders/ViewReminder';
import GiftCategory from '../Gift/GiftCategory';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AddReminder" component={AddReminder} />
      <Stack.Screen name="ViewReminder" component={ViewReminder} />
      <Stack.Screen name="GiftCategory" component={GiftCategory} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
