import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View>
            <MaterialCommunityIcons 
                name='trash-can' 
                color={'black'} 
                size={35}
            ></MaterialCommunityIcons>
        </View>
    </TouchableWithoutFeedback>
    
  )
}