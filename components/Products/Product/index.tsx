import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import ProductImage from './ProductImage'
import styles from './styles'

export interface ProductProps  {
    products:{
    productName:string,
    tiempoResultado:Number,
    price:Number,
    image:string,
    }
}

const Product = (props:ProductProps) => {
    
    const {
        products: {
        productName,
        tiempoResultado,
        price,
        image
    }} = props

    

   const onPressLearnMore = ()=>{
        return(
            console.warn("agregar")
    )}

    return(
        <View style={styles.container}>
            <View style={styles.subcontainer1}>
                <ProductImage image={image}/>
            </View>
            <View style={styles.subcontainer2}>
                <Text style={styles.text1}>{productName}</Text>
                <Text style={styles.text2}>Tiempo de resultado {tiempoResultado} min</Text>
                <Text>{price}</Text>
                <TouchableOpacity
                onPress={onPressLearnMore}
                style={styles.button}>
                    <Text style={styles.textButton}>Agregar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product