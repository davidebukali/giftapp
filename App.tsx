import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/features/Navigation/StackNavigation';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
          <StatusBar style="auto" />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
