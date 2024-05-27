import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import RemindersList from '../Reminders/RemindersList';
import OrderList from '../Orders/OrderList';
import Profile from '../User/Profile';
import GiftCategory from '../Gift/GiftCategory';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={RemindersList} />
      <Drawer.Screen name="Gifts" component={GiftCategory} />
      <Drawer.Screen name="OrderList" component={OrderList} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
