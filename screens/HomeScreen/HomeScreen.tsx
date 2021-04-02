import * as React from 'react';

import {View} from 'react-native'
import SearchBarComponent from '../../components/SearchBar'
import Banner from '../../components/Banner'
import styles from './styles'
import Products from '../../components/Products'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.subcontainer1}>
        <SearchBarComponent/>
      </View>
      
      <View style={styles.subcontainer2}>
         <Banner/>
      </View>
      
      <View style={styles.subcontainer3}>
        <Products/>
          
    
      </View>
    </View>
  );
}

