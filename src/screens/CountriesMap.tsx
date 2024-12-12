import { Button, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

export default function CountriesMap({ route, navigation }: any) {
  const { name, continent, capital, flag, language, population, latlng } = route.params;

  if (!latlng || latlng.length < 2) {
    return (
      <View>
        <Text>No location available for this country.</Text>
      </View>

    );
  }

  const lat = latlng[0];
  const lng = latlng[1];

  const mapURL = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=5/${lat}/${lng}`;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flagContainer}>
        <Image source={{ uri: flag }} style={styles.flag} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.infoText}>Continent: <Text style={styles.highlight}>{continent}</Text></Text>
        <Text style={styles.infoText}>Capital: <Text style={styles.highlight}>{capital}</Text></Text>
        <Text style={styles.infoText}>Language: <Text style={styles.highlight}>{language}</Text></Text>
        <Text style={styles.infoText}>Population: <Text style={styles.highlight}>{population}</Text></Text>
        <Text style={styles.coordinatesText}>Latitude: {lat}, Longitude: {lng}</Text>
      </View>
      <View style={styles.mapContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ uri: mapURL }}
          style={styles.map}
        />
      </View>
      
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#eaeaea',
  },
  flagContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  flag: {
    width: 90,
    height: 55,
    borderRadius: 10,
    marginBottom: 12,
  },
  infoContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#2f2f2f',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#3498db',
  },
  coordinatesText: {
    fontSize: 16,
    color: '#444',
    marginTop: 8,
  },
  mapContainer: {
    marginVertical: 20,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  map: {
    width: '100%',
    height: 420,
  },
  buttonContainer: {
    marginTop: 12,
  },
});

