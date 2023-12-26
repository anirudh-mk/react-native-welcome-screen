import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

export default function ImageScreen() {
  return (
    <View>
        <MaterialCommunityIcons 
            name='close' 
            color='black' 
            size={30}
            style={styles.green}
        ></MaterialCommunityIcons>
        <MaterialCommunityIcons 
            name='trash-can-outline'
            color='black' 
            size={30}
            style={styles.red}
        ></MaterialCommunityIcons>
        <Image resizeMode="contain" style={styles.image}source={require('../assets/image.png')}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%'
    },
    container:{
        flex:1
    },
    green:{
        position:"absolute",
        top:70,
        left:20
    },
    red:{
        position:"absolute",
        top:70,
        right:20
    }

})