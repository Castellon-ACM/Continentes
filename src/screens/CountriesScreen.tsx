import React from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useCountries } from "../hooks/useCountries";
import CountryCard from "../components/ComponentForCountry";

export default function CountriesScreen({ route, navigation }: any) {
    const { continentName } = route.params;
    const { countries, loading } = useCountries(continentName);

    const handleCountryPress = (country: any) => {
        const { name, continent, capital, flag, languages, population, latlng } = country;
        navigation.navigate("CountriesMap", {
            name,
            continent,
            capital,
            flag,
            language: languages,
            population,
            latlng,
        });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.loadingText}>Cargando países...</Text>
            </View>
        );
    }

    if (!countries || countries.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No se encontraron países en {continentName}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Países en {continentName}</Text>
            <FlatList
                data={countries}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <CountryCard
                        name={item.name}
                        capital={item.capital}
                        flag={item.flag}
                        languages={item.languages}
                        onPress={() => handleCountryPress(item)}
                    />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 25,
      backgroundColor: "#eaeaea",
      paddingHorizontal: 18,
  },
  title: {
      fontSize: 26,
      fontWeight: "700",
      textAlign: "center",
      color: "#2f2f2f",
      marginBottom: 12,
  },
  emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
  },
  emptyText: {
      fontSize: 18,
      color: "#777",
      textAlign: "center",
      paddingHorizontal: 25,
  },
  listContainer: {
      paddingBottom: 22,
  },
  loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#eaeaea",
  },
  loadingText: {
      marginTop: 12,
      fontSize: 18,
      color: "#666",
  },
  countryCard: {
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
      marginVertical: 8,
      backgroundColor: "#fff",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
  },
  flag: {
      width: 50,
      height: 30,
      marginRight: 12,
      borderRadius: 4,
  },
  infoContainer: {
      flex: 1,
  },
  countryName: {
      fontSize: 18,
      fontWeight: "600",
      color: "#000",
      marginBottom: 4,
  },
  countryDetail: {
      fontSize: 14,
      color: "#555",
  },
});
