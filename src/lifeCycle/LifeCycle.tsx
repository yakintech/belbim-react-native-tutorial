import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

const LifeCycle = () => {

    const [counter, setcounter] = useState(0)
    const [randomNumber, setrandomNumber] = useState(0)

    //State değiştikçe ve view kısmındaki değer değiştikçe component yeniden render edilir.
    console.log("LifeCycle Rendered")


    useEffect(() => {
        //Component ilk açıldığında BİR KERELİĞE MAHSUS çalışır.
        let random = Math.floor(Math.random() * 100)
        setrandomNumber(random)
    }, [])


    return <>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Counter: {counter}</Text>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Random Number: {randomNumber}</Text>
            <Pressable onPress={() => setcounter(20)}>
                <Text style={{ fontSize: 18, color: 'blue' }}>Increment</Text>
            </Pressable>
        </View>
    </>
}

export default LifeCycle