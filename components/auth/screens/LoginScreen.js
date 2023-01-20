import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { authLogin } from '../../../helpers/auth-api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = ({navigation}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    
    const onPressLogin = async () => {

        await authLogin({
            usu_login: username,
            usu_pass: password})
            .then(( resp ) => {
                if (resp?.status == 200) {
                    console.log(resp.data.token);
                    AsyncStorage.setItem('token', resp.data.token);
                    navigation.replace('Home');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <View style={styles.login}>
            <View style={styles.form}>

                <Text style={styles.text}>Login</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Nombre de usuario"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Contraseña"
                />

                <TouchableOpacity onPress={onPressLogin} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    login: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%'
    },
    form: {
        padding: 20,
        margin: 20
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 30,
        borderColor: '#232323',
        color: '#232323',
        textDecorationStyle: 'none',
        margin: 5

    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
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

})
