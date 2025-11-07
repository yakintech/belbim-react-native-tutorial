import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const LifeCycyle2 = () => {

    const [randomNumber, setrandomNumber] = useState(0)
    const [counter, setcounter] = useState(0)


    useEffect(() => {

        let random = Math.floor(Math.random() * 100)
        setrandomNumber(random)

        //eğer bu array işareti içerisinde hiç bir state veya prop yoksa component sadece bir kere çalışır. yani component açıldığında.
        //FAKAT burada bir state veya prop varsa o state veya prop her değiştiğinde useEffect tekrar çalışır! Buna useEffect dependency denir.
    }, [counter])



    return <>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Random Number: {randomNumber}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Counter: {counter}</Text>
            <Text style={{ fontSize: 18, color: 'blue' }} onPress={() => setcounter(counter + 1)}>Increment</Text>
        </View>
    </>
}

export default LifeCycyle2