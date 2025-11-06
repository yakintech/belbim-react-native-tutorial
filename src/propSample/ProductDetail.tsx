import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductDetail = (props:any) => {
  return <>
    <View
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
    >
        <Image
            source={{ uri: props.product.productImageUrl }}
            style={{ width: '100%', height: 200 }}
        />
        <Text
            style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}
        >
            {props.product.productName}
        </Text>
        <Text
            style={{ fontSize: 16, color: '#666', marginTop: 5 }}
        >
            {props.product.description}
        </Text>
        <TouchableOpacity
            style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5, marginTop: 10, alignItems: 'center' }}
            onPress={props.onAddToCart}
        >
            <Text style={{ color: '#fff', fontSize: 16 }}>Add to Cart</Text>
        </TouchableOpacity>
    </View>
  </>
  
}

export default ProductDetail