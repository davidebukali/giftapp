import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import Home from '../../pages/Home/Home';
import GiftDetails from '../../pages/GiftDetails/GiftDetails';
import AddReminder from '../Reminders/AddReminder';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="GiftDetails" component={GiftDetails} />
      <Drawer.Screen
        name="AddReminder"
        component={AddReminder}
        options={{ title: 'Add Reminder' }}
      />
    </Drawer.Navigator>
  );
};

export default Sidebar;
