import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductDetailScreen = ({ route }: any) => {

  const { productId } = route.params;
  const [detail, setdetail] = useState<any>({})

  useEffect(() => {

    axios.get("https://northwind.vercel.app/api/products/" + productId)
      .then(response => {
        setdetail(response.data)
      })
      .catch(error => {
        console.error(error)
      })

  }, [])


  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text
        style={{ fontSize: 24, fontWeight: 'bold' }}
      >ProductDetailScreen</Text>
      <Text
        style={{ fontSize: 18, marginTop: 10 }}
      >Product ID: {productId}</Text>
      <Text
        style={{ fontSize: 18, marginTop: 10 }}
      >Name: {detail.name}</Text>
      <Text
        style={{ fontSize: 18, marginTop: 10 }}
      >Price: ${detail.unitPrice}</Text>
      <Text
        style={{ fontSize: 18, marginTop: 10 }}
      >Stock: {detail.unitsInStock}</Text>
      {/* unitsOnOrder, categoryId, quantityPerUnit */}
    <Text
        style={{ fontSize: 18, marginTop: 10 }}
      >Units On Order: {detail.unitsOnOrder}</Text>
      <Text
        style={{ fontSize: 18, marginTop: 10 }}
      >Category ID: {detail.categoryId}</Text>
      <Text
        style={{ fontSize: 18, marginTop: 10 }}
      >Quantity Per Unit: {detail.quantityPerUnit}</Text>
    </View>
  )
}

export default ProductDetailScreen