import { View, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import dayjs from 'dayjs'

//günlük su takibi uygulaması örneği
const BasicStateSample = () => {

    const [waterCounter, setWaterCounter] = useState(0)
    const [waterHistory, setwaterHistory] = useState<any[]>([])
    //waterCounter değeri her değiştiğinde, component yeniden render edilir ve ekranda gerekli alanlar güncellenir.
    //setWaterCounter fonksiyonu, waterCounter değerini güncellemek için kullanılır. waterCounter = 3 gibi doğuradan atama yapılamaz.
    //0 ise waterCounter başlangıç değeri
    console.log("Component render edildi. yeni waterCounter değeri:", waterCounter);

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

            </Text>
        </View>
        <View
            style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
        >
            <Text
                style={{ fontSize: 48, fontWeight: 'bold' }}
            >
                {waterHistory.length} bardak
            </Text>
        </View>
        <View>
            <TouchableOpacity
                style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5, marginTop: 20, alignItems: 'center', marginHorizontal: 100 }}
                onPress={() => {
                    setWaterCounter(waterCounter + 1)
                    let waterDate = new Date()
                    setwaterHistory([...waterHistory, waterDate])
                }}
            >
                <Text
                    style={{ color: '#fff', fontSize: 16 }}
                >Su Ekle</Text>
            </TouchableOpacity>
        </View>

        <ScrollView
            style={{ marginTop: 30, paddingHorizontal: 20 }}
        >
            <Text
                style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: "center" }}
            >Su İçme Geçmişi</Text>

            {
                waterHistory.reverse().map((date: any, index: any) => <>
                    <View
                        key={index}
                        style={{ padding: 10, 
                            borderBottomWidth: 1, 
                            borderBottomColor: '#ccc',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Text key={index} style={
                        {
                            fontSize: 20,
                            marginBottom: 5,
                            paddingBottom: 5
                        }}>
                        {/* date sample: 10:21 AM */}
                        {index + 1}. {dayjs(date).format('hh:mm A')}
                    </Text>
                    <Pressable
                    onPress={() => {

                        let newHistory = waterHistory.filter(q => q !== date)
                        setwaterHistory(newHistory)
                        setWaterCounter(newHistory.length)

                    }}
                    >
                        <Text
                            style={{ fontSize: 14, color: 'red', marginBottom: 10 }}
                        >
                            Sil
                        </Text>
                    </Pressable>
                    </View>

                </>
                )
            }
        </ScrollView>
    </>
}

export default BasicStateSample