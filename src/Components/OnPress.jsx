import { View, Text, Button } from 'react-native'
import React from 'react'

const OnPress = () => {
  let myName = 'Tahir'
  function getName( myName) {
    myName = 'Sheikh' // udated name
    console.warn(`Hello My Name is ${myName}`);
    return myName;
  }

  return (
    <View>
      <Text style={{ fontSize: 20

        
       }}>OnPress</Text>
      <Text style={{ fontSize: 20 }}>OnPress</Text>
      <Text style={{ fontSize: 20 }}>{myName}</Text>
      <Button
        title='Press Me'
        onPress={() => getName()}
      />
    </View>
  )
}

export default OnPress