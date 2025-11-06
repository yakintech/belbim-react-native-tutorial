import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import dayjs from 'dayjs'

const SportSample = () => {

  const [counter, setcounter] = useState("0")
  const [exerciseHistory, setexerciseHistory] = useState<any[]>([])



  const addHistory = (exerciseName: string) => {

    let exerciseIsExist = exerciseHistory.find(item => item.name === exerciseName)

    if (!exerciseIsExist) {
      let newEntry = {
        name: exerciseName,
        count: Number(counter),
        date: new Date()
      }
      setexerciseHistory([...exerciseHistory, newEntry])
    }
    else {
      let updatedHistory = exerciseHistory.map(item => {
        if (item.name === exerciseName) {
          return {
            ...item,
            count: item.count + Number(counter),
            date: new Date()
          }
        }
        return item
      })
      setexerciseHistory(updatedHistory)
    }

  }


  return <>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold'
        }}
      >Exercise Tracking</Text>
    </View>
    <View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          margin: 10,
          borderRadius: 5
        }}
        onChangeText={(text) => setcounter(text)}
        placeholder='Counter'
        value={counter}
      />
    </View>
    <View>
      <Pressable
        style={{
          backgroundColor: '#007bff',
          padding: 15,
          margin: 10,
          borderRadius: 5,
          alignItems: 'center'
        }}
        onPress={() => addHistory("Squad")}
      >
        <Text>Squad</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#28a745',
          padding: 15,
          margin: 10,
          borderRadius: 5,
          alignItems: 'center'
        }}
        onPress={() => addHistory("Push Up")}
      >
        <Text>Push Up</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#ffc107',
          padding: 15,
          margin: 10,
          borderRadius: 5,
          alignItems: 'center'
        }}
        onPress={() => addHistory("Plank")}
      >
        <Text>Plank</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#17a2b8',
          padding: 15,
          margin: 10,
          borderRadius: 5,
          alignItems: 'center'
        }}
        onPress={() => addHistory("Burpee")}
      >
        <Text>Burpee</Text>
      </Pressable>

      {/* Divider */}
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          marginVertical: 20
        }}
      />

    </View>

    Histort List
    <View
      style={{
        marginHorizontal: 10
      }}
    >
      {
        exerciseHistory.map((item: any, index: any) => {
          return <View
            key={index}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#eee'
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18
              }}
            >Exercise: {item.name}</Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 16
              }}
            >Count: {item.count}</Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 16
              }}
            >{dayjs(item.date).format('YYYY-MM-DD HH:mm')}</Text>
          </View>
        })
      }

    </View>
  </>
}

export default SportSample