import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { productsData } from '../data/products'

const FlatListStateSample = () => {

    const [products, setproducts] = useState(productsData)

    const renderItem = ({item}:any) => {
        return <View style={{padding:10, borderBottomWidth:1, borderBottomColor:'#ccc'}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>{item.name}</Text>
            <Text>{item.quantityPerUnit}</Text>
            <Text style={{fontSize:16, fontWeight:'600', marginTop:5}}>${item.unitPrice}</Text>
        </View>
    }

    return <>
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item:any) => item.id}
        />
    </>

}

export default FlatListStateSample