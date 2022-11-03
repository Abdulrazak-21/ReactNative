import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationScreen from './components/Navigation/NavigationScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationScreen />
  );
}

export default App;
