import React from 'react'
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native'
import {Entypo, Feather, AntDesign} from '@expo/vector-icons'

import styles from './styles'
import Colors from '../../constants/Colors'


const CreandoOrdenScreen = ()=>{
    const onPressLogOut= ()=>{
        console.warn('cancelar')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textCreando}>Creando Orden</Text>
            </View>
            <View style={styles.subcontainer1}>
                <View style={styles.subcontainer1_1}>
                    <Entypo name="location-pin" size={33} color={Colors.dark.tint}/>
                    <Text style={styles.textentregar}>Entregar en</Text>
                </View>
                <Text style={styles.textdireccion}> Eungenia 210</Text>
            </View>
            <Text style={styles.textNombre}>Tu orden Francisco</Text>
            <Text style={styles.textProductName}>1 Prueba de embarazo</Text>
            <Text style={styles.textMetodoPago}>Método de pago: Tarjeta de débito</Text>

            <View style={styles.subcontainer3}> 
                    <View style={styles.subcontainer4}>
                        <TouchableOpacity onPress={onPressLogOut} style={styles.button}>
                            <Text style={styles.textButton}>Cancelar pedido</Text>
                        </TouchableOpacity>
                    </View> 
                </View>  

        </SafeAreaView>
    )
}

export default CreandoOrdenScreen