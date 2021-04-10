import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    textCreando:{
fontSize:30,
textAlign:'center',
marginVertical:20,
fontWeight:'700',
    },

    subcontainer1:{
        marginTop:20,
        marginHorizontal:20,
        padding: 10,
        borderRadius:10,
        backgroundColor:'#E3E3E3',
    },

    subcontainer1_1:{
        flexDirection:'row',
        alignItems:'center',
    },

    textentregar:{
        fontSize:17,
    
    },

    textdireccion:{
        fontSize:17,
        paddingTop:10 ,
    },
    textNombre:{
        marginTop:40,
        fontSize:17,
        marginVertical:20,
        marginHorizontal:20,
    },
    textProductName:{
        fontSize:19,
        marginVertical:20,
        marginHorizontal:20,
    },
    textMetodoPago:{
        fontSize:19,
        marginVertical:20,
        marginHorizontal:20,
    },

    subcontainer3:{
        width:'100%',
        position:'absolute',
        bottom:0,
        marginBottom:36,
        alignItems:'center',
    },
    subcontainer4:{

    },

    button:{
        backgroundColor:'#022180',
        borderRadius:5,
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3%'
    },
    textButton:{
        color:'white',
        fontSize:16,
    }
})

export default styles
