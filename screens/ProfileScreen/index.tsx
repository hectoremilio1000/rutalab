import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import ProfilePhoto from '../../components/ProfilePhoto'
import styles from './styles'
import {MaterialCommunityIcons, 
    MaterialIcons, 
    AntDesign,
    Entypo,
    Ionicons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'

export type ProfileScreenprops ={

}

const ProfileScreen = () => {

    const onPressOrdenes= ()=>{
        return(console.warn("click en ordenes"))
    }

    const onPressPago= ()=>{
        return(console.warn("click en pago"))
    }

    const onPressConfiguracion= ()=>{
        return(console.warn("click en configuración"))
    }

    const onPressTerminos= ()=>{
        return(console.warn("click en términos"))
    }

    const onPressPrivacidad= ()=>{
        return(console.warn("click en privacidad"))
    }

    const onPressLogOut= ()=>{
        return(console.warn("click en cerrar sesión"))
    }

return(
    <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.container1}>
            <View style={styles.subcontainer1}>
                <ProfilePhoto/>
                <Text style={styles.textoperfil}>Mi perfil</Text>
                <Text style={styles.textoperfil}></Text>
            </View>
            <View style={styles.subcontainer2}>
            <Text style={styles.textonombre}>Lucía González</Text>
            </View>
            <View style={styles.subcontainer3}>
                <MaterialCommunityIcons name="clipboard-list-outline" size={40} color={Colors.dark.tint}/>
                <TouchableOpacity onPress={onPressOrdenes}>
                    <Text style={styles.textolista}>Mis órdenes</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.subcontainer3}>
                <MaterialIcons name="payment" size={40} color={Colors.dark.tint}/>
                <TouchableOpacity onPress={onPressPago}>
                    <Text style={styles.textolista}>Métodos de pago</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.subcontainer3}>
                <AntDesign name="setting" size={40} color={Colors.dark.tint}/>
                <TouchableOpacity onPress={onPressConfiguracion}>
                    <Text style={styles.textolista}>Configuración</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.subcontainer3}>
                <Entypo name="text-document" size={40} color={Colors.dark.tint}/>
                <TouchableOpacity onPress={onPressTerminos}>
                    <Text style={styles.textolista}>Términos y condiciones</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.subcontainer3}>
                <Ionicons name="document" size={40} color={Colors.dark.tint}/>
                <TouchableOpacity onPress={onPressPrivacidad}>
                    <Text style={styles.textolista}>Privacidad</Text>
                </TouchableOpacity>
            </View>

        </View>
    
        <View style={styles.container2}> 
            <View style={styles.subcontainer4}>
                <TouchableOpacity onPress={onPressLogOut} style={styles.button}>
                    <Text style={styles.textButton}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View> 
        </View> 
        </View>
    </SafeAreaView>
)
}

export default ProfileScreen
