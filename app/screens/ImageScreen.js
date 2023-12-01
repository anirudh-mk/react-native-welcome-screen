import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

export default function ImageScreen() {
  return (
    <View>
        <View style={styles.green}></View>
        <View style={styles.red}></View>
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
        width:50,
        height:50,
        backgroundColor:"green",
        position:"absolute",
        top:70,
        left:20
    },
    red:{
        width:50,
        height:50,
        backgroundColor:"tomato",
        position:"absolute",
        top:70,
        right:20
    }

})