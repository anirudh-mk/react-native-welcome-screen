import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

function WelcomeScreen(props) {
  return (
    <ImageBackground 
        style={styles.background}
        source={require('../assets/splash.png')}>
        
        <View style={styles.icon}>
            <Image 
                style={styles.logo}
                source={require('../assets/favicon.png')}>
            </Image>
            <Text>Sell anything anyware!</Text>
        </View>
        <View style={styles.signup}></View>
        <View style={styles.login}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    login:{
        height:50,
        width:'100%',
        backgroundColor:'tomato'
    },
    signup:{
        width:'100%',
        height:50,
        backgroundColor: 'gold'
    },
    logo:{
        width:70,
        height:70,
    },
    icon:{
        position:"absolute",
        top:100,
        alignItems:"center"
    }

})

export default WelcomeScreen