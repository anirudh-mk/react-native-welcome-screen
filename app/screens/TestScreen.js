import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


import WelcomText from '../components/WelcomText'


function TestScreen() {
  return (
    <View style={styles.container}>
        <WelcomText>Welcome to react native test screen</WelcomText>
        <View style={styles.box}>
            <MaterialIcons name='email' size={50} color={'white'}/>
        </View>
        <View style={styles.bottomBox}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        width:100,
        height:100,
        backgroundColor:'dodgerblue',
        borderWidth:5,
        borderColor:"blue",
        borderTopWidth:20,
        borderRadius:10,
        borderTopLeftRadius:40,
        elevation:50,//shadow
        justifyContent:'center',
        alignItems:'center',
        margin:20
    },
    // emailIcon:{
    //     alignItems:'center',
    //     justifyContent:'center'
    // },
    bottomBox:{
        width:100,
        height:100,
        backgroundColor:"tomato",
    },
})

export default TestScreen