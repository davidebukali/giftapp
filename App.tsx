import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './features/Navigation/StackNavigation';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
