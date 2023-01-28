import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Message = ({msg}) => {
  return (
    <View>
        {
            (msg.status == 200) && <Text style={styles.statusOk}> Bienvenido!!! </Text> 
            
        }  
        {
            (msg.status === 400 || msg.status === 401) && <Text style={styles.statusError}> Revisa tus credenciales! </Text>
            
        }  
    </View>
  )
}


const styles = StyleSheet.create({
    statusOk: {
        borderRadius: 30,
        margin: 30,
        backgroundColor: '#5abf30',
        padding: 15,
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 17
    },
    statusError: {
        borderRadius: 30,
        margin: 30,
        backgroundColor: '#ff4b4c',
        padding: 15,
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 17
    }
});