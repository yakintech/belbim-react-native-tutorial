
import { View, Text, Image } from 'react-native'
import React from 'react'

const UserBio = (props: any) => {
    return <>
        <View style={{ alignItems: 'center', marginTop: 20, padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Image
                source={{ uri: props.userImageUrl }}
                style={{ width: 100, height: 100 }}
            />
            <Text
                style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}
            >
                {props.name} {props.surname}
            </Text>
        </View>

        <View
            style={{ marginTop: 20,
            padding: 10
             }}
        >
            <Text style={{ fontSize: 18, marginBottom: 5 }}>
                Join Date: {props.joinDate}
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>
                About: {props.about}
            </Text>

            <Text style={{ fontSize: 18, marginBottom: 5, color: props.isOnline ? 'green' : 'red' }}>
                Online Status: {props.isOnline ? "Online" : "Offline"}
            </Text>

        </View>
    </>
}

export default UserBio