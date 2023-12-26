import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import WelcomText from '../components/WelcomeText/WelcomText'
import ButtonComponent from '../components/Button/ButtonComponent'
import Card from '../components/Card/Card'

function TestScreen() {
  return (
    <View style={styles.container}>
        <Card 
            title='anirudh'
            subtitle='$100'
            image={require('D:/Anirudh/Coding/native/WelcomeScreen/app/assets/image.png')}
            ></Card>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingTop:100,
        // alignItems:"center",
        // justifyContent:"center",
        backgroundColor:'#EEF5FF'
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