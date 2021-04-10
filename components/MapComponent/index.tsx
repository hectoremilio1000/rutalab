import React from 'react';
import {View} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from './styles'
import Colors from '../../constants/Colors'

const cars = [{
    id:'0',
    type:'moto',
    latitude:'17.0660784',
    longitude:'-96.7352220',
    ordernumber:'',
    heading:47,

}]

const MapComponent = ()=>{
    return(
        <View style={styles.subcontainerMap}>
            <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 17.0660784,
                longitude: -96.7352220,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            style={styles.map}>
                <Marker
                    coordinate={{ latitude : 17.0660784 , longitude : -96.7352220 }}
                    title="Inicio  de RUTALAB"
                    description="Punto de partida"
                    
                />
                </MapView>
        </View>
    )
}

export default MapComponent
 