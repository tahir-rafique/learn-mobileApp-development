import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail("");
    setPassword("");
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor={'#999'}
      />

      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={'#999'}
        secureTextEntry={true}
      />


      <TouchableOpacity
        onPress={handleLogin}
      >
        <Text>Login</Text>
      </TouchableOpacity>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#f0f0f0",
  },
})


export default LoginForm