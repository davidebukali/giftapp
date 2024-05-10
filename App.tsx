import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/features/Navigation/StackNavigation';
import { store } from './src/app/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
        <StatusBar style="auto" />
      </PaperProvider>
    </Provider>
  );
}
