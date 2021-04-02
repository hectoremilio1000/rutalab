import React from 'react'
import {View, FlatList} from 'react-native'
import styles from '../SearchBar/styles'
import Product from './Product'


const products=[{
    id:'1',
    productName:'Biometría Hemática',
    tiempoResultado:30,
    price:349,
    image:'http://rutalab.com/imagenes/productos/Biometria_hematica.jpg'
  },
  {
    id:'2',
    productName:'Prueba de embarazo',
    tiempoResultado:120,
    price:200,
    image:'http://rutalab.com/imagenes/productos/prueba_embarazo.jpg'
  },
  {
    id:'3',
    productName:'Prueba de embarazo',
    tiempoResultado:50,
    price:200,
    image:'http://rutalab.com/imagenes/productos/prueba_embarazo.jpg'
  }
  ]

const Products = () =>{
    

    return(
        <View>
            <FlatList
            data={products}
            renderItem={({item})=> <Product products={item}/>}
            keyExtractor={item => item.id}/>
        </View>
    )
}

export default Products