import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const API_PUT = () => {
  const API_URL = 'http://192.168.18.241:3000/users';
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleInputs = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_URL}/${formData.id}`, {
        name: formData.name,
        email: formData.email,
      });
      Alert.alert('Success', 'Data updated successfully!');
      console.log(response.data);
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      Alert.alert('Error', 'Failed to update data');

      console.log(error);
    }
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          textAlign: 'center',
          paddingVertical: 20,
        }}
      >
        PUT API METHOD
      </Text>

      <TextInput
        placeholder="Enter ID"
        value={formData.id}
        onChangeText={val => handleInputs('id', val)}
      />
      <TextInput
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={val => handleInputs('name', val)}
      />
      <TextInput
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={val => handleInputs('email', val)}
      />

      <Button title="Update" onPress={() => handleUpdate()} />
    </View>
  );
};

export default API_PUT;
