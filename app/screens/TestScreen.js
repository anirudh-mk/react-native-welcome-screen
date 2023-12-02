import React from 'react'
import {View,StyleSheet, Text} from 'react-native'

function TestScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.WelcomeText}>Welcome to react native test screen</Text>
        <View style={styles.box}>
            <View style={styles.innerBox}></View>
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
        padding:10,
        margin:20
    },
    innerBox:{
        width:50,
        height:50,
        backgroundColor:'tomato',
        borderRadius:10,
    },
    bottomBox:{
        width:100,
        height:100,
        backgroundColor:"tomato",
    },
    WelcomeText:{
        position:'absolute',
        top:100,
        color:'tomato',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        textTransform:"capitalize",
        padding:20,
    }
})

export default TestScreen