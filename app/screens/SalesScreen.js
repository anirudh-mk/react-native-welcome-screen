import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import colors from '../config/colors'
import ListItem from '../components/ListItem/ListItem'
const SalesScreen = () => {
  return (
    <View>
      <Image
        style={styles.image} 
        source={require('D:/Anirudh/Coding/native/WelcomeScreen/app/assets/image.png')}></Image>
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Dog</Text>
        <Text style={styles.price}>$100</Text>
      </View>
      <ListItem 
        name='Anirudh MK'
        title='5 listing'
        image={require('D:/Anirudh/Coding/native/WelcomeScreen/app/assets/image.png')}
      ></ListItem>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    height:300,
    width:'100%'
  },
  containerDetails:{
    padding:20
  },
  title:{
    fontSize:20,
    fontWeight:'600'
  },
  price:{
    fontWeight:'600',
    color:colors.secondery,
  }

})

export default SalesScreen