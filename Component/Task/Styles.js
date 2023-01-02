import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    item:{

        backgroundColor:'#ffff',
        marginBottom:6,
        flexDirection:'row',
        borderRadius:8,
        marginTop:10
    },
    number:{
      fontSize:18,
      padding:12,
      paddingHorizontal:16,
      marginLeft:4,
      marginRight:8,
      marginTop:4,
      marginBottom:4,
      color:'white',
      borderRadius:8
    },
    even :{
      backgroundColor:"#43D1EE"
    },
    odd:{
      backgroundColor:'#4CF250'
    },
    text:{
        flex:1,
        fontSize:20,
        color:'#707070'

    }
})

export default Styles;