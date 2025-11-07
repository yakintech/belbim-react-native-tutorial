import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const ProductListScreen = () => {

  const [products, setproducts] = useState<any>([])

  const navigation = useNavigation<any>();

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then(response => {
        setproducts(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
    style={{ padding: 10}}
    onPress={() => {
      navigation.navigate("ProductDetail", { productId: item.id } as never)
    }}
    >
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontSize: 18 }}>{item.name}</Text>
        <Text style={{ color: '#666', fontSize:16 }}>${item.unitPrice}</Text>
      </View>
    </TouchableOpacity>
  )



  return <>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  </>
}

export default ProductListScreen