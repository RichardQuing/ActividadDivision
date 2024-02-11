import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { InicioScreen } from '../screens/InicioScreen';
import { Division } from '../screens/Division';


export type RootStackParamList = {
  InicioScreen: undefined,
  Division: undefined,
  
}

const Stack = createStackNavigator<RootStackParamList>();
export const PrimeraNavegacion = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name="InicioScreen" options={{ title: 'Inicio' }} component={InicioScreen} />
      <Stack.Screen name="Division" options={{title: 'Divisiones'}} component={Division} />
   
    </Stack.Navigator>
  );
}
