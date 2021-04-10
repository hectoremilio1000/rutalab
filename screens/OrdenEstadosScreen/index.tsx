import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles'
import MapComponent from '../../components/MapComponent';


const OrdenEstadoScreen = () =>{

    const onPressLogOut= ()=>{
        console.warn('cancelar')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.subcontainer1}>
                <Text style={styles.horaLlegada}>10:25</Text>
                <Text style={styles.textHora}>Hora estimada de llegada</Text>
            </View>
            <View style={styles.subcontainer2}>
            <AntDesign name="checkcircle" size={40} color="black" />
            <Text style={styles.textOrden}>Orden recibida... Preparándonos</Text>
            </View>

            <MapComponent
            />

            <View style={styles.subcontainer3}> 
                    <View>
                        <TouchableOpacity onPress={onPressLogOut} style={styles.button}>
                            <Text style={styles.textButton}>Cancelar pedido</Text>
                        </TouchableOpacity>
                    </View> 
                </View>     

        </SafeAreaView>
        
    )
}

export default OrdenEstadoScreen