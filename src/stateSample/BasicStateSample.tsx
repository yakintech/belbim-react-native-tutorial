import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

//günlük su takibi uygulaması örneği
const BasicStateSample = () => {

    let waterCounter = 0;

    return <>
        <View
            style={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <Text
                style={{ fontSize: 34, fontWeight: 'bold', marginTop: 20 }}
            >Günlük Su Takibi</Text>
        </View>
        <View>
            <Text
                style={{ fontSize: 18, marginTop: 10, textAlign: 'center' }}
            >Bugün içtiğin toplam su miktarı: 
                <Text
                    style={{ fontWeight: 'bold', fontSize: 20 }}
                >{waterCounter} bardak</Text>
            </Text>
        </View>
        <View>
            <TouchableOpacity
            style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5, marginTop: 20, alignItems: 'center', marginHorizontal: 100 }}
            onPress={() => {
               waterCounter = waterCounter + 1;
               console.log("Su miktarı: ", waterCounter);
            }}
            >
                <Text
                    style={{ color: '#fff', fontSize: 16 }}
                >Su Ekle</Text>
            </TouchableOpacity>
        </View>
    </>
}

export default BasicStateSample