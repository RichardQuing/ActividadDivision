import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps{
    title: string;
    onPress:()=>void;
}

export const ButtonComponents = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}
    onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonContainer:{
        paddingVertical:15,
        borderRadius:10,
        backgroundColor:'#00CED1',
        marginTop:20
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        fontSize:14,
        fontWeight:'bold'
    }
})