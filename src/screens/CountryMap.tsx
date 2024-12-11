import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { RootStackParamList } from '../App';

type CountryMapRouteProp = RouteProp<RootStackParamList, 'CountryMap'>;

const CountryMap = ({ route }: { route: CountryMapRouteProp }) => {
  const { country } = route.params;  // Aquí accedes al parámetro country

  // Verifica si los datos del país están completos
  if (!country || !country.latlng) {
    return <Text>Data not available</Text>;  // Si falta información importante
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{country.name}</Text>
      <Text>Capital: {country.capital || 'Unknown'}</Text>
      <Text>Population: {country.population.toLocaleString()}</Text>
      <Text>Region: {country.region}</Text>
      <Text>Subregion: {country.subregion}</Text>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: country.latlng[0],
            longitude: country.latlng[1],
            latitudeDelta: 5,
            longitudeDelta: 5,
          }}
        >
          <Marker
            coordinate={{
              latitude: country.latlng[0],
              longitude: country.latlng[1],
            }}
            title={country.name}
            description={country.capital}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapContainer: {
    flex: 1,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default CountryMap;

