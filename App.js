import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entradas from './src/screens/entradas';
import compras from './src/screens/compras';
import Compras from './src/screens/compras';
import Carteira from './src/screens/carteira';
import Boletos from './src/screens/boletos';



const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home'
        screenOptions={{
          headerShown: false,}}>
          <Stack.Screen name = 'Home' component = {Home}/>
          <Stack.Screen name = 'Entradas' component = {Entradas}/>
          <Stack.Screen name = 'Compras' component = {Compras}/>
          <Stack.Screen name = 'Carteira' component = {Carteira}/>
          <Stack.Screen name = 'Boletos' component = {Boletos}/>
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}