import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import RemindersList from '../Reminders/RemindersList';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={RemindersList} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
