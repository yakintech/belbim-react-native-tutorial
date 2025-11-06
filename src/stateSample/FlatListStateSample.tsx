import { View, Text, FlatList, Touchable, TouchableOpacity, Alert, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { productsData } from '../data/products'

const FlatListStateSample = () => {

    const [products, setproducts] = useState(productsData)
    const [refreshing, setRefreshing] = useState(false)



    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setproducts([...productsData]);
            setRefreshing(false);
        }, 2000);
    }


    const renderItem = ({ item }: any) => {
        return <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.quantityPerUnit}</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 5 }}>${item.unitPrice.toFixed(2)}</Text>
            <TouchableOpacity
                style={{
                    marginTop: 10,
                    borderColor: 'red',
                    padding: 5, width: 80, alignItems: 'center',
                    borderRadius: 5,
                    borderWidth: 1,
                    right: 10,
                    position: 'absolute'

                }}
                onPress={() => {

                    Alert.alert(
                        "Delete Product",
                        "Are you sure you want to delete this product?",
                        [
                            {
                                text: "Cancel",
                                style: "cancel"
                            },
                            {
                                text: "Delete",
                                onPress: () => {
                                    let filteredProducts = products.filter(q => q.id != item.id)
                                    setproducts(filteredProducts)
                                },
                                style: "destructive"
                            }
                        ]
                    )
                }}
            >
                <Text
                    style={{ color: 'red' }}
                >Delete</Text>
            </TouchableOpacity>
        </View>
    }

    return <>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>Product List</Text>
            <Text
                style={{ marginLeft: 10, marginBottom: 10 }}
            >Length: {products.length}</Text>
        </View>

        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        />
    </>

}

export default FlatListStateSample