import { View, Text, TouchableOpacity,  } from 'react-native'
import React from 'react'

import styles from './style'
import colors from '../../config/colors'

const ButtonComponent = ({title, onPress, color="secondery"}) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor:colors[color]}]} onPress={()=>{console.log(title)}}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent