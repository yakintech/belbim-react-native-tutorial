import { View, Text } from 'react-native'
import React from 'react'
import BaseElements from './src/BaseElements'
import { SafeAreaView } from 'react-native-safe-area-context'
import OneWayBinding from './src/OneWayBinding'

const App = () => {


  return <SafeAreaView>
    <OneWayBinding />
  </SafeAreaView>

}

export default App