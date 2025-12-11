import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {

  const prevName = 'Tahir'
  const [name, setName] = useState('');
  const updateName = () => {
    setName('Dev Only!');
    
    console.log(name);
  }


  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>UseStateHook</Text>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>{prevName}</Text>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>My new Name:{name}</Text>
      <Button
        title='Press Me'
        onPress={()=>updateName()}
      />
    </View>
  )
}

export default UseStateHook