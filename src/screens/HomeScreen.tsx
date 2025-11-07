import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    return <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
            style={{ fontSize: 34, fontWeight: 'bold' }}
        >HomeScreen</Text>

        <TouchableOpacity
            style={{
                marginTop: 20,
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 5,
                width: 200
            }}
            onPress={() => navigation.navigate("Product" as never)}

        >

            <Text style={{
                color: 'white',
                fontSize: 18,
                textAlign: 'center'

            }}>Go to Products Screen</Text>
        </TouchableOpacity>
    </SafeAreaView>
}

export default HomeScreen