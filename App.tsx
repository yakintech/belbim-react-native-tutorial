import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import AboutScreen from './src/screens/AboutScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductStack from './src/navigation/stack/ProductStack'
import CategoryStack from './src/navigation/stack/CategoryStack'

const RootStack = createNativeStackNavigator()

const App = () => {
  return (<SafeAreaProvider>
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Product'>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="About" component={AboutScreen} />
        <RootStack.Screen name="Product" component={ProductStack} />
        <RootStack.Screen name="Category" component={CategoryStack} />
      </RootStack.Navigator>
    </NavigationContainer>

  </SafeAreaProvider>

  )

}


export default App