import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OrdersScreen = () => {

    const [orders, setorders] = useState<Order[]>([])

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/orders")
            .then((response) => {
                setorders(response.data)
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
            });

    }, [])


    const renderItem = ({ item }: { item: Order }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text
                style={{ fontSize: 16, fontWeight: 'bold' }}
            >Order ID: {item.id}</Text>
            <Text
                style={{ fontSize: 14 }}
            >Customer ID: {item.customerId}</Text>
            <Text
                style={{ fontSize: 14 }}
            >Order Date: {new Date(item.orderDate).toLocaleDateString()}</Text>
            <Text
                style={{ fontSize: 14 }}
            >Ship Name: {item.shipName}</Text>
            <Text
                style={{ fontSize: 14 }}
            >Ship Address: {item.shipAddress?.city}</Text>
        </View>
    );


    return <>
        <FlatList
            data={orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
    </>
}



interface Order {
    id: number;
    customerId: string;
    orderDate: string;
    shipName: string;
    shipAddress: {
        city: string;
    };

}
export default OrdersScreen