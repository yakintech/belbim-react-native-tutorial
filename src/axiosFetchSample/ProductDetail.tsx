import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

const ProductDetail = () => {

    const [searchById, setsearchById] = useState("")
    const [detail, setdetail] = useState<any>({})
    const [loading, setloading] = useState(false)


    const search = () => {
        let id = parseInt(searchById)
        setloading(true)


        setTimeout(() => {
            fetch("https://northwind.vercel.app/api/products/" + id)
                .then(res => res.json())
                .then(data => {
                    setdetail(data)
                    setloading(false)
                })
                .catch(err => {
                    setloading(false)
                })  
        }, 2000);

    }

    if(loading)
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={"large"} color="blue" />
        </View>


    return <View>
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Product Detail Component</Text>
        </View>
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5 }}
                placeholder='Search product by ID'
                value={searchById}
                onChangeText={text => setsearchById(text)}
                keyboardType='numeric'
            />
        </View>

        <TouchableOpacity
            style={{ backgroundColor: "blue", padding: 10, margin: 10, borderRadius: 5 }}
            onPress={search}
        >
            <Text style={{ color: "white", textAlign: "center" }}>Search</Text>
        </TouchableOpacity>


        <View style={{ height: 1, backgroundColor: "#ccc", marginVertical: 10 }} />

        <View style={{ padding: 10 }}>
            <Text
                style={{ fontSize: 26 }}
            >
                Name: {detail.name}
            </Text>
            <Text
                style={{ marginVertical: 5, fontSize: 26 }}
            >
                Unit Price: {detail.unitPrice}
            </Text>
            <Text
                style={{ marginVertical: 5, fontSize: 26 }}
            >
                Units In Stock: {detail.unitsInStock}
            </Text>
            <Text
                style={{ marginVertical: 5, fontSize: 26 }}
            >
                Quantity Per Unit: {detail.quantityPerUnit}
            </Text>

        </View>
    </View>
}

export default ProductDetail