import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { InicioScreen } from './src/screens/InicioScreen';
import { PrimeraNavegacion } from './src/navigation/PrimeraNavegacion';

const App = () => {
  return (
    <NavigationContainer>
      <PrimeraNavegacion/>
    </NavigationContainer>
  )
}


export default App;
