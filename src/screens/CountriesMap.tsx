import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default function CountriesMap({ route, navigation }: any) {
  const { name, continent, capital, flag, language, population, latlng } = route.params;

  if (!latlng || latlng.length < 2) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No location available for this country.</Text>
      </View>
    );
  }

  const [lat, lng] = latlng;
  const mapURL = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=5/${lat}/${lng}`;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: flag }} style={styles.flag} />
        <Text style={styles.countryName}>{name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Continent: <Text style={styles.boldText}>{continent}</Text></Text>
        <Text style={styles.detailText}>Capital: <Text style={styles.boldText}>{capital}</Text></Text>
        <Text style={styles.detailText}>Language: <Text style={styles.boldText}>{language}</Text></Text>
        <Text style={styles.detailText}>Population: <Text style={styles.boldText}>{population}</Text></Text>
        <Text style={styles.coordinates}>Coordinates: {lat}, {lng}</Text>
      </View>
      <View style={styles.mapContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ uri: mapURL }}
          style={styles.map}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Countries</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 18,
    color: '#d9534f',
    textAlign: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3498db',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  flag: {
    width: 100,
    height: 60,
    borderRadius: 8,
    marginBottom: 12,
  },
  countryName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: '600',
    color: '#2c3e50',
  },
  coordinates: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 10,
  },
  mapContainer: {
    marginHorizontal: 15,
    borderRadius: 10,
    overflow: 'hidden',
    height: 400,
  },
  map: {
    flex: 1,
  },
  button: {
    margin: 20,
    padding: 15,
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});