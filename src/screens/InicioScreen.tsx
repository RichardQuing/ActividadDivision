import React from 'react'
import {  Text, TouchableOpacity, View,Image } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/PrimeraNavegacion';


interface Props extends StackScreenProps<RootStackParamList, 'InicioScreen'> { };

export const InicioScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={styles.textBig}>BIENVENIDO</Text>
      <Image style={styles.avatar}
              source={{
                  uri: 'https://www.solbyte.com/blog/wp-content/uploads/Black-Friday-Cyber-Monday-4.png'
              }}
               />
      <TouchableOpacity 
                    onPress={()=>navigation.navigate('Division')}>
                    <Text style={styles.textButoon}> Acceder </Text>
      </TouchableOpacity>
      
</View>
  )
}
