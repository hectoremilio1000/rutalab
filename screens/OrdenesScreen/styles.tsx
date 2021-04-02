import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
    },

    logo:{
        width:50,
        height:75,
        alignSelf:'center'
    },
    subcontainer1:{
        marginVertical:20,
        marginHorizontal:20,
        paddingHorizontal: 10,
        paddingVertical:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#EBEBEB',
        borderRadius:10,

    },
    textpropina:{
            fontSize:17,
            },
    sucontainer1_1:{
            flexDirection:'row',
            alignItems:'center',
        },
    propinamonto:{
            fontSize:15,
            marginRight:2,
            },

    subcontainer2:{
        marginVertical:20,
        marginHorizontal:20,
        paddingHorizontal: 10,
        paddingVertical:20,
        backgroundColor:'#EBEBEB',
        borderRadius:10,
    },
    textcurso:{
        fontSize:22,
        textAlign:'center',
        marginBottom:20,
        fontWeight:'bold',
    },
    subcontainer2_1:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        marginTop:10,
        
    },
    subcontainer2_1_1:{
        height:'100%',
        alignItems:'center',
        flex:1
    },
    prueba:{
        fontSize:20,
    },
    fecha:{
        fontSize:20,
        marginVertical:15,
    },
    proceso:{
        fontSize:20,
        marginVertical:15,
    },
    resultados:{
        fontSize:20,
        marginVertical:15,
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