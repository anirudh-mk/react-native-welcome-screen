import { View, Text, FlatList, SafeAreaView, Platform, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem/ListItem'
import Screen from '../components/Screen/Screen'

const messages = [
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require('D:/Anirudh/Coding/native/WelcomeScreen/app/assets/image.png')
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require('D:/Anirudh/Coding/native/WelcomeScreen/app/assets/image.png')
    }
]

const MessagesScreen = () => {
  return (
    <Screen>
        <FlatList
            data={messages}
            keyExtractor={messages=>messages.id.toString()}
            renderItem={({ item }) => 
        <ListItem
            name={item.title}
            title={item.description}
            image={item.image}
            onPress={()=>console.log("message selected",item.title)}
        ></ListItem>}
        ItemSeparatorComponent={()=> <View style={{
            width:'100%', 
            height:1, 
        }} />}
    ></FlatList>
    </Screen>
  )
}

export default MessagesScreen