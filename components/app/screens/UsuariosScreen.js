import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getAllUsers } from '../../../helpers/user-api'

export const UsuariosScreen = ({ navigation }) => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        getAllUsers()
            .then((resp) => {
                console.log(resp);
                if (resp.status == 200) {
                    setUsuarios(resp.data);
                    }
            })

        return () => {
            setUsuarios([]);
        }
    })


    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Usuarios</Text>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.replace('Home')}>
                    <Text style={styles.titleBack}>Volver</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.listUsers}>
                {
                    usuarios.map((user) => (
                        <View key={user.id_usuario}>
                            <Text>{user.usu_login}</Text>
                        </View>
                    ))
                }
            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    buttonBack: {
        elevation: 8,
        backgroundColor: '#009688',
        borderRadius: 30
    },
    titleBack: {
        padding: 10,
        color: '#fff',

    }
})
