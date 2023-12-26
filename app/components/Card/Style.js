import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container:{
        backgroundColor:"gray",
        width:'100%',
        height:250,
        borderRadius:20
    },
    image:{
        flex:1,
        borderRadius:20
    },
    imageContainer:{
        width:'100%',
        height:'70%'
    },
    textContainer:{
        width:'100%',
    },
    title:{
        paddingLeft:10,
        color:'white',
        fontSize:20,
        fontWeight:'600'
    },
    subtitle:{
        paddingLeft:10,
        color:'tomato',
        fontSize:20,
        fontWeight:'600'
    },

})

export default styles;