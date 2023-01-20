import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TouchableOpacity
} from 'react-native';

export const HomeScreen = ({ navigation }) => {

  const onPressLogout = () => {
    AsyncStorage.clear();
    navigation.replace('Login');
  }



  return (
    <View style={styles.container}>

    
      <TouchableOpacity style={styles.item} onPress={ () => navigation.replace('Usuarios')}>
        <Text style={styles.title_item}>Usuarios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={ () => navigation.replace('TiposUsuarios')}>
        <Text style={styles.title_item}>Tipos de Usuarios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={ () => navigation.replace('Mapa')}>
        <Text style={styles.title_item}>Mapa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={ () => navigation.replace('Contador')}>
        <Text style={styles.title_item}>Contador</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={onPressLogout} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Salir</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    elevation: 8,
    width: 250,
    borderRadius: 6,
    backgroundColor: '#b7ffe8',
    margin: 10,
    padding: 10
  },
  title_item: {
    color: '#232323',
    fontSize: 20,
    fontWeight: '500'

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  },
  appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
  },
  appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 30,
      padding: 10,
      margin: 10
  }
});