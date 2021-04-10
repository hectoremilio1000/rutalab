import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
},
  subcontainer1:{
flexDirection:'row',
justifyContent:'space-around',
marginHorizontal:20,
marginVertical:20,
  },

  horaLlegada:{
    fontSize:20,
    fontWeight:'700',
  },

  textHora:{
fontSize:18,
alignSelf:'center',
  },
  
  subcontainer2:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal:20,
    marginBottom:20,
  },

  textOrden:{
    fontSize:18,
    alignSelf:'center',
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
  }}
  );

  export default styles