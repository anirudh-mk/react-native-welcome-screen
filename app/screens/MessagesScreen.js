import { View, Text, FlatList, SafeAreaView, Platform, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/ListItem/ListItem'
import Screen from '../components/Screen/Screen'
import ListItemDeleteAction from '../components/ListItemDeleteAction/ListItemDeleteAction'

const initaialMessages = [
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
    const [messages, setMessages] = useState(initaialMessages)
    const handleDelete = message => {
        setMessages(messages.filter((m) => m.id !== message.id))
    }
    const [refreshing, setRefreshing] = useState(false)
  return (
    <Screen>
        <FlatList
            data={initaialMessages}
            keyExtractor={messages=>messages.id.toString()}
            renderItem={({ item }) => 
            <ListItem
                name={item.title}
                title={item.description}
                image={item.image}
                onPress={()=>console.log("message selected",item.title)}
                renderRightAction={() => <ListItemDeleteAction onPress={
                    ()=> handleDelete(item)}/>}
            ></ListItem>}
            ItemSeparatorComponent={()=> <View style={{
                width:'100%', 
                height:1, 
            }} />}
            refreshing={refreshing}
            onRefresh={()=> setMessages([
                {
                    id:2,
                    title:'T2',
                    description:'D2',
                    image:require('D:/Anirudh/Coding/native/WelcomeScreen/app/assets/image.png')
                }
            ])}
        ></FlatList>
    </Screen>
  )
}

export default MessagesScreen