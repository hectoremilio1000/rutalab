import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:10,
        paddingVertical:10,
        marginTop:15,
        
    },
    subcontainer1:{
        flex: 1,
        alignItems: 'center',
    },
    subcontainer2:{
        flex:1.2,
        marginLeft:'2%',
        marginRight:'3%',
        justifyContent:'space-between'
    },
    text1:{
        marginBottom:'5%',
        marginTop:'3%'
    },
    text2:{
        paddingBottom:'5%',
    },

    button:{
        backgroundColor:'#022180',
        borderRadius:5,
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3%'
    },
    textButton:{
        color:'white',
    }
})

export default styles