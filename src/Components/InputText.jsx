import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {

  const [username, setUserame] = useState('');
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>InputText</Text>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>Username: {username}</Text>

      <TextInput
        value={username}
        onChangeText={(myData) => setUserame(myData)}
        placeholder='Enter Your Name'
        style={{ borderColor: "red", borderWidth: 1, margin: 10 }}
      />

      <Button
        title='Clear'
        onPress={() => setUserame('')}
      />

    </View>
  )
}

export default InputText