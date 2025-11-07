import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const CategoriesScreen = () => {

  const [categories, setcategories] = useState<any>([])

  useEffect(() => {

    fetch("https://northwind.vercel.app/api/categories")
      .then(res => res.json())
      .then(data => setcategories(data))

  }, [])


  const renderItem = ({ item }: any) => {
    return <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  }


  return <View style={{ padding: 10 }}>
    <FlatList
      data={categories}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  </View>
}

export default CategoriesScreen