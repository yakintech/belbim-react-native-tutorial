import { View, Text } from 'react-native'
import React from 'react'

const ReactNativeElements = () => {


    return (
        <View>
            <Text
                style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign:'center' }}
            >Raporlar</Text>

            <View
                style={{
                    backgroundColor: '#f0f0f0', padding: 10, marginBottom: 10
                }}
            >
                <Text>Kullanıcı Raporu</Text>
                <Text>Tarih: 12 Ocak</Text>
            </View>

            <View
                style={{
                    backgroundColor: '#f0f0f0', padding: 10, marginBottom: 10
                }}
            >
                <Text>Ürün Raporu</Text>
                <Text>Tarih: 10 Mart</Text>
            </View>

            <View
                style={{
                    backgroundColor: '#f0f0f0', padding: 10, marginBottom: 10
                }}
            >
                <Text>Genel Rapor</Text>
                <Text>Tarih: 21 Temmuz</Text>
            </View>

        </View>
    )
}

export default ReactNativeElements