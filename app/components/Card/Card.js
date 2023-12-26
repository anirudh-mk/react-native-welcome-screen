import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
// import styles from './Style'
export default function Card({title, subtitle, image} ) {
  return (
    <View style={styles.container}>
        <Image style={styles.image}
          source={image}>
        </Image>
        <View style={styles.textPadding}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:colors.white,
      borderRadius:15,
      marginBottom:20,
      overflow:'hidden'
  },
  image:{
      height:200,
      width:'100%',
  },
  textPadding:{
    padding:20,
  },
  title:{
    fontSize:20,
    paddingBottom:7,
    fontWeight:'600'
  },
  subtitle:{
    color:'tomato',
    fontWeight:'600'
  }

})
