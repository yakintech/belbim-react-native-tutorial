import { View, Text } from 'react-native'
import React from 'react'

const OneWayBinding = () => {

    let name = "Çağatay Yıldız"
    let countries = ["Turkey", "Germany", "USA", "France"]
    let onlineStatus = true

    return <View
        style={{ padding: 20}}
    >
        <Text style={{fontSize:30}}>{name}</Text>

        {
            countries.map((country) => <Text style={{fontSize:30}} key={country}>{country}</Text>)
        }

        {
            onlineStatus == true ? <Text style={{fontSize:30}}>Online</Text> : <Text style={{fontSize:30}}>Offline</Text>
        }
    </View>
}

export default OneWayBinding