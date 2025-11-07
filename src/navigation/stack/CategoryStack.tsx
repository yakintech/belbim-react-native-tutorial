import { View, Text } from 'react-native'
import React from 'react'
import CategoryListScreen from '../../screens/category/CategoryListScreen'
import CategoryDetailScreen from '../../screens/category/CategoryDetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoryList" component={CategoryListScreen} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
    </Stack.Navigator>
  )
}

export default CategoryStack