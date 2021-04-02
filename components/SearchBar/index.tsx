/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import {
  TextInput,
  View,
  Platform,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles'

export type SearchBarComponentProps={
    props?:undefined,

}

const SearchBarComponent = ({props}:SearchBarComponentProps)=>{
    return (
      //ListView to show with textinput used as search bar
    <View style={styles.viewStyle}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Buscar servicios"
          style={styles.textStyle}
        />
    </View>
    )
  
}



export default SearchBarComponent