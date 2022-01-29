import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import HomeScreen from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './src/screens/product';
import SearchScreen from './src/screens/search';
import ProductDetails from './src/screens/product/ProductDetails';
import CartScreen from './src/screens/product/CartScreen';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="Search" component={SearchScreen} />
      <Stack.Screen options={{headerShown: false}} name="Details" component={ProductDetails} />
      <Stack.Screen options={{headerShown: false}} name="CartScreen" component={CartScreen} />
      <Stack.Screen name="Product" options={({ route }) => ({ title: route.params.title })} component={ProductList} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <MyStack/>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}