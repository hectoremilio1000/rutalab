import React, {useState, useEffect} from 'react'
import {View, TextInput,SafeAreaView, Text, TouchableOpacity} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import styles from './styles'

const DestinationSearchScreen = ()=>{
    const [ubicacionActual, setUbicacionActual] = useState(['Calzada Madero # 319 -C. Centro 68030 Oaxaca de Juárez, México', "Aún no tienes nueva dirección"])

    const [originPlace, setOriginPlace] = useState(null)

    const onPressActualizar = ()=>{
        
    }

    useEffect(() => {
        
    }, [originPlace])
    if (originPlace){
        console.warn('redirect to results')
    }

    return(
        <SafeAreaView>
            
                <TextInput
                    
                    placeholder="Ingresa una dirección nueva"
                    style={styles.textInput}
                    placeholderTextColor="#727272"
                    onChangeText={()=>{setUbicacionActual}}
                    />
            <View style={styles.autcomplete}>
            <GooglePlacesAutocomplete
            
                placeholder='Search'
                onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                setOriginPlace({data,details});
                }}
                styles={{TextInput:styles.textInput}}
                fetchDetails
                query={{
                key: 'AIzaSyDgJ1FeKhUsM-oYr1s6yoQrCdqCEw-PhiM',
                language: 'en',
                }}
            />
            </View> 
            <View>
                <View style={styles.ubicacion_container}>
                    <View style={styles.ubicacion_actual}>
                    <Text style={styles.textRecurrente}>Ubicación actual</Text>
                    <Text style={styles.textUbicacionActual}>{ubicacionActual[0]}</Text>
                    </View>
                    <TouchableOpacity onPress={onPressActualizar}
                    style={styles.button}>
                        <Text style={styles.textActualizar}>Actualizar</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearchScreen