import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContinentsScreen from './screens/ContinentsScreen';
import CountriesScreen from './screens/CountriesScreen';
import { ThemeProvider, useTheme } from './ThemeContext';
import GoToHomeButton from './components/GoToHomeButton';
import CountryMap from './screens/CountryMap';


export type RootStackParamList = {
  ContinentsScreen: undefined;
  CountriesScreen: { continent: string };
  CountryMap: { country: { 
    name: string; 
    capital: string; 
    population: number; 
    region: string; 
    subregion: string; 
    latlng: [number, number]; 
  }};
  
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const { theme } = useTheme();
  const styles = theme === 'light' ? { backgroundColor: '#ffffff' } : { backgroundColor: '#000000' };

  useEffect(() => {
    StatusBar.setBarStyle(theme === 'dark' ? 'light-content' : 'dark-content');
  }, [theme]);

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: styles.backgroundColor }]}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ContinentsScreen">
          <Stack.Screen name="ContinentsScreen" component={ContinentsScreen} />
          <Stack.Screen name="CountriesScreen" component={CountriesScreen} />
          <Stack.Screen name="CountryMap" component={CountryMap} />
        </Stack.Navigator>
        <GoToHomeButton />
      </NavigationContainer>
      
    </SafeAreaView>
  );
};

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;

