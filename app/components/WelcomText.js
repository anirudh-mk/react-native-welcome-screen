import React from 'react'

import { Text, View, StyleSheet, Platform } from 'react-native'

function WelcomText({ children }) {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}
const styles = StyleSheet.create({
    text:{
        position:'absolute',
        top:100,
        color:'tomato',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        textTransform:"capitalize",
        padding:20,
    }
})

export default WelcomText