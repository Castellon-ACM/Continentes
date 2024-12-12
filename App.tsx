import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContinentsScreen from './src/screens/ContinentsScreen';
import CountriesScreen from './src/screens/CountriesScreen';
import CountriesMap from './src/screens/CountriesMap';
import BotonPaginaAnterior from './src/components/BotonPaginaAnterior';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Continents">
        <Stack.Screen name="Continents" component={ContinentsScreen} />
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen 
          name="CountriesMap" 
          component={CountriesMap} 
          options={({ navigation }) => ({
            headerLeft: () => (
              <BotonPaginaAnterior onPress={() => navigation.goBack()} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;

