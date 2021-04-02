import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

export type BannerProps = {
imagen?:string,
}

const Banner = ()=>{
    return(
        <Image source={{uri:'http://rutalab.com/imagenes/banner/banner_promo.jpg'}}
        style={styles.image}
        />
    )
}

export default Banner