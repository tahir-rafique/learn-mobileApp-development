import { View, Text, Alert, Button } from 'react-native'
import React from 'react'

const showAlert = () => {
    //  it take 4 parameters, 1st string title, 2nd string description,  3rd Array of object (buttons) 4th object( for when we click outside of Alert box ),
    Alert.alert(
        // 1st
        "Alert Title: Tahir",
        // 2nd
        "Alert Message: Sheikh Here!",
        // 3rd
        [
            {
                text: 'Cancle',
                onPress: () => { console.log('Cancle') },
                style: 'cancel'
            },

            {
                text: 'OK',
                onPress: () => { console.log('Ok') },
                style: 'destructive'
            },
        ],
        // 4th
        {
            cancelable: false
        }
    )
}

const AlertComp = () => {
    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>AlertComp</Text>

            <Button title='Show Alert' onPress={showAlert} />
        </View>
    )
}

export default AlertComp