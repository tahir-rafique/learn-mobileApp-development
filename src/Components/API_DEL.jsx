import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const API_DEL = () => {
  const API_URL = 'http://192.168.18.241:3000/users';
  const [id, setID] = useState();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      Alert.alert('Success!', 'Data Deleted Scuccessfully');
      console.log(response.data);
      setID(' ');
    } catch (error) {
      Alert.alert('Error!', 'Failed to Delete Data');
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
        DELETE API METHOD
      </Text>

      <TextInput
        placeholder="Enter ID"
        value={id} // state binding
        onChangeText={value => setID(value)}
      />
      {/* <TextInput
        placeholder="Enter Name"
        value={myData.name} // state binding
        onChangeText={value => handleInputs('name', value)}
      />
      <TextInput
        placeholder="Enter Email"
        value={myData.email} // state binding
        onChangeText={value => handleInputs('email', value)}
      /> */}

      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default API_DEL;
