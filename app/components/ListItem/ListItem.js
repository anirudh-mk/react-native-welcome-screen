import { View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const ListItem = ({name, title, image, onPress, RenderRightAction}) => {
  return (
    <TouchableHighlight 
        underlayColor={colors.white}
        onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={image}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.subtitle}>{title}</Text>
            </View>
        </View>
    </TouchableHighlight>

  )
}

const styles = StyleSheet.create({
    card:{
        margin:10,
        flexDirection:'row',
        padding:10
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:20,
    },
    textContainer:{
        textAlign:'center'
    },
    name:{
        fontSize:20,
        paddingBottom:5
    },
    subtitle:{
        fontSize:15,
    }

})

export default ListItem