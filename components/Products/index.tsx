import React from 'react'
import {View, FlatList} from 'react-native'
import styles from '../SearchBar/styles'
import Product from './Product'


const products=[{
    id:'1',
    productName:'Biometría Hemática',
    tiempoResultado:30,
    price:1300,
    image:'http://rutalab.com/imagenes/productos/Biometria_hematica.jpg'
  },
  {
    id:'2',
    productName:'Prueba de embarazo',
    tiempoResultado:120,
    price:300,
    image:'http://rutalab.com/imagenes/productos/prueba_embarazo.jpg'
  },
  {
    id:'3',
    productName:'Prueba de COVID',
    tiempoResultado:15,
    price:1500,
    image:'http://rutalab.com/imagenes/productos/covid_test.jpg'
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