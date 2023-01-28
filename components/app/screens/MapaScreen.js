import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps';

export const MapaScreen = ({ navigation }) => {
    return (
        <View style={styles.mapascreen}>

            <View style={styles.header}>
                <Text style={styles.title}>Mapa</Text>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.replace('Home')}>
                    <Text style={styles.titleBack}>Volver</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <MapView style={styles.map} initialRegion={{

                    latitude: -33.426856,
                    longitude: -70.617684,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>

                    <Marker coordinate={
                        {
                            latitude: -33.426856,
                            longitude: -70.617684
                        }
                    }>
                        <Callout>
                            <Text>Estoy Aqui</Text>
                        </Callout>
                    </Marker>

                </MapView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    mapascreen: {

    },
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    map: {
        marginTop: 50,
        borderRadius: 30,
        width:'90%',
        height: 450,
    },
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

    },
});
