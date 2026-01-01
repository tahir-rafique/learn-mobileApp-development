import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const API_PATCH = () => {
  const API_URL = 'http://192.168.18.241:3000/users';
  const [myData, setMyData] = useState({ id: '', name: '', email: '' });

  const handleInputs = (field, value) => {
    setMyData({ ...myData, [field]: value });
  };

  const handleUpdate = async () => {
    try {
      // axios ek promise hai uss ko handle karna hai, tou awiat async ka use kea
      const response = await axios.patch(`${API_URL}/${myData.id}`, {
        ...(myData.name && { name: myData.name }),
        ...(myData.email && { email: myData.email }),
        // spread operator ka use karty huy phly wala data ko laya, aur && AND operator ka use kea condtion lagany ky ley ky, agr sirf Name kee value change hotee hia tou ussy update kary, similar in next step for Email.
      });

      Alert.alert('Success', 'Data updated successfully');
      // console.log(response.data);
      setMyData({ id: '', name: '', email: '' });
      console.log(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to updated Data');
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
        PATCH API METHOD
      </Text>

      <TextInput
        placeholder="Enter ID"
        value={myData.id} // state binding
        onChangeText={value => handleInputs('id', value)}
      />
      <TextInput
        placeholder="Enter Name"
        value={myData.name} // state binding
        onChangeText={value => handleInputs('name', value)}
      />
      <TextInput
        placeholder="Enter Email"
        value={myData.email} // state binding
        onChangeText={value => handleInputs('email', value)}
      />

      <Button title="Update Specific data Field" onPress={handleUpdate} />
    </View>
  );
};

export default API_PATCH;
