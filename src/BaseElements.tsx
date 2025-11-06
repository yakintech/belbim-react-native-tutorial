import { View, Text, TextInput, Pressable, Alert, Touchable, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

const BaseElements = () => {
    return <>
        <View
            style={{ marginBottom: 10 }}
        >
            View elementi webde div gibi kullanılır.
        </View>
        <Text
            style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
        >
            Text elementi webde p, span vb. elementler gibi kullanılır.
        </Text>

        <TextInput
            style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
            placeholder='TextInput elementi webde input gibi kullanılır.' />

        <Pressable
            style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
            onPress={() => Alert.alert('Butona tıklandı!')}>
            <Text>Click Me!</Text>
            <Text>Butonlar Pressable ile yapılır.</Text>

        </Pressable>

        <TouchableOpacity
            style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
            onPress={() => Alert.alert('TouchableOpacity butonuna tıklandı!')}>
            <Text>TouchableOpacity Buton</Text>
            <Text>Butonlar TouchableOpacity ile de yapılabilir.</Text>
        </TouchableOpacity>

        <ScrollView
            style={{ height: 100, borderWidth: 1, padding: 5 }}>
            <Text>ScrollView elementi webde scrollable bir alan oluşturur.</Text>
            <Text>ScrollView elementi webde scrollable bir alan oluşturur.</Text>
            <Text>ScrollView elementi webde scrollable bir alan oluşturur.</Text>
            <Text>ScrollView elementi webde scrollable bir alan oluşturur.</Text>
            <Text>ScrollView elementi webde scrollable bir alan oluşturur.</Text>
            <Text>ScrollView elementi webde scrollable bir alan oluşturur.</Text>
            <Text>ScrollView elementi webde scrollable bir alan oluşturur.</Text>
            <Text>ScrollView elementi webde scrollable bir alan oluşturur.</Text>
            <Text>ScrollView elementi webde scrollable bir alan oluşturur.</Text>

        </ScrollView>

        <Image
            style={{ width: 100, height: 100, marginTop: 10 }}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />


    </>
}

export default BaseElements