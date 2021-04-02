import React from 'react'
import {Text, SafeAreaView, Image, View, TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

import Colors from '../../constants/Colors'
import styles from './styles'
const logo = require('../../assets/images/adaptive-icon.png')

export type HelpScreenProps ={

}



const HelpScreen = ()=>{
    const onPressComentarios = ()=>{
        console.warn("escribir comentarios")
    }

    const onPressPreguntas = ()=>{
        console.warn("escribir preguntas")
    }

    const onPressTickets = ()=>{
        console.warn("Consultar tickets")
    }
return(
    <SafeAreaView style={styles.container}>
        
        <Image source={logo} style={styles.logo}/>
        <View style={styles.subcontainer1}>
            <Text style={styles.textpropina}>Ayuda con una orden</Text>
            <TouchableOpacity onPress={onPressComentarios}>
                <View style={styles.sucontainer1_1}>
                    <Text style={styles.propinamonto}>Escribe</Text>
                    <AntDesign name="right" size={14} color={Colors.dark.tint}/>
                 </View>
            </TouchableOpacity>
        </View>

        <View style={styles.subcontainer1}>
            <Text style={styles.textpropina}>Preguntas frecuentes</Text>
            <TouchableOpacity onPress={onPressPreguntas}>
                <View style={styles.sucontainer1_1}>
                    <AntDesign name="right" size={14} color={Colors.dark.tint}/>
                 </View>
            </TouchableOpacity>
        </View>

        <View style={styles.subcontainer1}>
            <Text style={styles.textpropina}>Consultar tickets</Text>
            <TouchableOpacity onPress={onPressTickets}>
                <View style={styles.sucontainer1_1}>
                    <AntDesign name="right" size={14} color={Colors.dark.tint}/>
                 </View>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
)
}

export default HelpScreen