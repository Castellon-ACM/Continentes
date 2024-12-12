import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";

export default function CountryCard({ name, capital, flag, languages, mapInfo, onPress }: any) {
  const [showMapInfo, setShowMapInfo] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => setShowMapInfo(!showMapInfo)}
      >
        <Text style={styles.mapButtonText}>Mostrar información del mapa</Text>
      </TouchableOpacity>

      {showMapInfo && (
        <View style={styles.mapInfoContainer}>
          <Text style={styles.mapInfoText}>{mapInfo}</Text>
        </View>
      )}

      <TouchableOpacity onPress={onPress} style={styles.cardContent}>
        <View style={styles.flagContainer}>
          <SvgUri uri={flag} width={70} height={50} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.capital}>Capital: {capital}</Text>
          <Text style={styles.languages}>Languages: {languages.join(", ")}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f4f6f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    borderColor: "#d1d8e0",
    borderWidth: 1,
    overflow: "hidden",
  },
  mapButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  mapButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  mapInfoContainer: {
    backgroundColor: "#e9ecef",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  mapInfoText: {
    color: "#495057",
    fontSize: 14,
  },
  cardContent: {
    flexDirection: "row",
  },
  flagContainer: {
    width: 70,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  capital: {
    fontSize: 14,
    color: "#6c757d",
    marginVertical: 5,
  },
  languages: {
    fontSize: 14,
    color: "#6c757d",
  },
});