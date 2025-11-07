import { View, Text } from 'react-native'
import React from 'react'
import ProductDetailScreen from '../../screens/product/ProductDetailScreen'
import ProductListScreen from '../../screens/product/ProductListScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

const ProductStack = () => {
  return <>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
      name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  </>
}

export default ProductStack