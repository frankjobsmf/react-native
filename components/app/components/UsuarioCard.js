import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const UsuarioCard = ({user}) => {
  return (
    <View style={styles.usuarioCard}>
        <Text style={styles.text}>{user.usu_login} - {`${user.usu_nombre} ${user.usu_apellido}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    usuarioCard: {
        borderRadius: 6,
        backgroundColor: '#396FDE',
        padding: 20,
        margin: 10
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    }


});
