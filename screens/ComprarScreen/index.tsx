import React from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import {Entypo, Feather, AntDesign} from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import styles from './styles'
import ProductImage from '../../components/Products/Product/ProductImage'

const image_tarjeta = require('../../assets/images/mastercard.jpg')


const ServicesScreen = () =>{

    

    const onPressPropina= ()=>{
        console.warn('Click en propina')
    }

    const onPressComentarios= ()=>{
        console.warn('Click en comentarios')
    }

    const onPressTrash = ()=>{
        console.warn('Click en Trash')
    }

    const onPressPagar=()=>{
        console.warn('Click en Pagar')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textorden}>Solicitar orden</Text>
            <View style={styles.subcontainer1}>
                <View style={styles.subcontainer1_1}>
                    <Entypo name="location-pin" size={33} color={Colors.dark.tint}/>
                    <Text style={styles.textentregar}>Entregar en</Text>
                </View>
                <Text style={styles.textdireccion}> Eungenia 210</Text>
            </View>

            <View style={styles.subcontainer2}>
                <Text style={styles.metodos}>Métodos de pago</Text>
                <TouchableOpacity>
                    <View style={styles.subcontainer2_1}>
                        <Image source={image_tarjeta} style={styles.imagenmaster}/>
                        <Text style={styles.terminacion}>0646</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.container3}>
                <View style={styles.container3_1}> 
                    
                    <Text style={styles.prueba}>Biometría hemática</Text>
                    <Text style={styles.precio}>$1300</Text>
                </View>

                <View style={styles.container3_2}>
                <Image 
                    source={{uri:'http://rutalab.com/imagenes/productos/Biometria_hematica.jpg'}}
                    style={styles.imageproducto}/>
                    <TouchableOpacity onPress={onPressTrash}>
                        <Feather name="trash-2" size={30} color={Colors.dark.tint}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.subcontainer3_3}>
                    <Text style={styles.textpropina}>Propina</Text>
                    <TouchableOpacity onPress={onPressPropina}>
                        <View style={styles.sucontainer3_3_1}>
                            <Text style={styles.propinamonto}>MXN$30</Text>
                            <AntDesign name="right" size={14} color={Colors.dark.tint} style={styles.iconrowright}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.subcontainer3_4}>
                    <Text style={styles.textpropina}>Comentarios</Text>
                    <TouchableOpacity onPress={onPressComentarios}>
                        <View style={styles.sucontainer3_3_1}>
                            <Text style={styles.propinamonto}>Escribe tus comentarios</Text>
                            <AntDesign name="right" size={14} color={Colors.dark.tint}/>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.subcontainer4}>
                <Text style={styles.totalPagar}>Total a pagar</Text>
                <Text>MX$329</Text>
            </View>

            <View style={styles.subcontainer5}> 
            <View style={styles.subcontainer5_1}>
                <TouchableOpacity onPress={onPressPagar} style={styles.button}>
                    <Text style={styles.textButton}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
            </View>

        </SafeAreaView>
    )
}

export default ServicesScreen