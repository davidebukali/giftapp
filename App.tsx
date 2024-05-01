import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home/Home';
import GiftDetails from './pages/GiftDetails/GiftDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from './Features/Navigation/Sidebar';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Sidebar />
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
