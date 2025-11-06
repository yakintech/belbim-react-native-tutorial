import { View, Text, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { ordersData } from '../data/orders'
import dayjs from 'dayjs'

const FlatListFilterSample = () => {

    const [orders, setorders] = useState(ordersData)
    const [searchByCountry, setsearchByCountry] = useState("")

    const renderItem = ({ item }: any) => {
        return <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order ID: {item.id}</Text>
            <Text>Customer ID: {item.customerId}</Text>
            <Text>Employee ID: {item.employeeId}</Text>
            <Text>Order Date: {item.orderDate}</Text>
            <Text>Ship Country: {item.shipAddress?.country}</Text>
        </View>
    }

    return <View
        style={{ flex: 1 }}
    >

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 }}>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 10,
                    paddingLeft: 10,
                    borderRadius: 5
                }}
                placeholder='Search by ship country...'
                value={searchByCountry}
                onChangeText={(text) => {
                    let filteredOrders = ordersData.filter(q => q.shipAddress?.country.toLowerCase().includes(text.toLowerCase()))
                    setorders(filteredOrders)
                    setsearchByCountry(text)
                }}
            />
        </View>

        <View
            style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 }}
        >
            <Text
                style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}
            >Length: {orders.length}</Text>
        </View>
        <FlatList
            data={orders}
            renderItem={renderItem}
        />
    </View>
}

export default FlatListFilterSample