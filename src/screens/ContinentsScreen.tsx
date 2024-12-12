import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { Region } from '../config/responses/DatosCountries';

const continents = Object.values(Region).map(region => ({ name: region }));

export default function ContinentsScreen({ navigation }: any) {
    const navigateToCountries = (continentName: string) => {
        navigation.navigate('Countries', { continentName });
    };

    const renderItem = ({ item }: { item: { name: string } }) => (
        <View style={styles.listItem}>
            <Button
                title={item.name}
                onPress={() => navigateToCountries(item.name)}
            />
        </View>
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
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    listItem: {
        width: '80%',
        marginVertical: 12,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
});
