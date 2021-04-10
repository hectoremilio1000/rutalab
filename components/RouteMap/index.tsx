import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import styles from './styles'

const GOOGLE_MAPS_APIKEY = 'AIzaSyDgJ1FeKhUsM-oYr1s6yoQrCdqCEw-PhiM';

const RouteMapComponent = () => {

    const origin = {
        latitude: 17.0660784,
        longitude: -96.7352220,
      };
    
      const destination = {
        latitude: 17.0544295,
        longitude: -96.7128516,
      };
    
    
    return(
        <SafeAreaView>
            <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 17.0660784,
                longitude: -96.7352220,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            style={styles.map}>
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="blue"
                    language="es"
                    timePrecision="now"
                    
                    />
                <Marker
                coordinate={origin}
                title={'Origen'}/>

                <Marker
                coordinate={destination}
                title={'Destino'}/>

                </MapView>
        </SafeAreaView>
    )
}

export default RouteMapComponent