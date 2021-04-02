import React from 'react'
import {Image} from 'react-native'
import styles from './styles'

export interface ProductImageProps {
    image :string;
}

const ProductImage = (props:ProductImageProps) =>{
    const {image} = props

    return(<Image source={{uri:image}}
        style={styles.image}
        />
    )
}

export default ProductImage