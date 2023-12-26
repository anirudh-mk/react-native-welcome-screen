import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'
import ButtonComponent from '../components/Button/ButtonComponent'

function WelcomeScreen(props) {
  return (
    <ImageBackground 
        blurRadius={15}
        style={styles.background}
        source={require('../assets/background.jpg')}>
        
        <View style={styles.icon}>
            <Image 
                style={styles.logo}
                source={require('../assets/favicon.png')}>
            </Image>
            <Text style={styles.banner}>Sell anything anyware!</Text>
        </View>
        <View style={styles.ButtonContainer}>
            <ButtonComponent title='login'></ButtonComponent>
            <ButtonComponent title='signup'></ButtonComponent>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    logo:{
        width:70,
        height:70,
    },
    icon:{
        position:"absolute",
        top:200,
        alignItems:"center"
    },
    ButtonContainer:{
        width:'100%',
        padding:10,
    },
    banner:{
        paddingTop:20,
        fontSize:22,
        fontWeight:'700',
        color:'white'
    }
})

export default WelcomeScreen