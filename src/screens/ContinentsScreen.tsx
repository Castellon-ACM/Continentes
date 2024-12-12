import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, TextStyle, ViewStyle } from 'react-native';
import { Region } from '../config/responses/DatosCountries';

const continents = Object.values(Region).map(region => ({ name: region }));

export default function ContinentsScreen({ navigation }: any) {
    const navigateToCountries = (continentName: string) => {
        navigation.navigate('Countries', { continentName });
    };

    const renderItem = ({ item }: { item: { name: string } }) => (
        <TouchableOpacity style={styles.button} onPress={() => navigateToCountries(item.name)}>
            <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecciona un continente</Text>
            <FlatList
                data={continents}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#eaeaea',
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 25,
        color: '#2f2f2f',
        textAlign: 'center',
    },
    list: {
        alignItems: 'center',
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    } as ViewStyle,
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    } as TextStyle,
});
