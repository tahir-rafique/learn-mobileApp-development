// import React, { useState } from 'react';
// import axios from 'axios';
// import { View, Text, TextInput, Button, Alert } from 'react-native';

// const PostAPI = () => {
//   const API_URL = 'http://192.168.18.241:3000/users';

//   const [formData, setFormData] = useState({ id: '', name: '', email: '' });

//   const handleInput = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(API_URL, formData);
//       Alert.alert('Success!', 'Data Submited Successfully');
//       setFormData({ id: '', name: '', email: '' });
//     } catch (error) {
//       Alert.alert(error, 'Failed to Submit data at this api endpoint ');
//     }
//   };

//   return (
//     <View>
//       <Text
//         style={{
//           fontSize: 24,
//           fontWeight: 600,
//           textAlign: 'center',
//           paddingVertical: 20,
//         }}
//       >
//         PostAPI
//       </Text>

//       <TextInput
//         placeholder="Enter ID"
//         value={formData.id} // for binding this input feild to formData state variable's value "id"
//         onChange={value => handleInput('id', value)}
//       />
//       <TextInput
//         placeholder="Enter Name"
//         value={formData.name}
//         onChange={value => handleInput('name', value)}
//       />
//       <TextInput
//         placeholder="Enter Email"
//         value={formData.email}
//         onChange={value => handleInput('email', value)}
//       />

//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// export default PostAPI;

import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const API_POST = () => {
  const API_URL = 'http://192.168.18.241:3000/users';

  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(API_URL, formData);
      Alert.alert('Success!', 'Data Submitted Successfully');
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      Alert.alert('Error', 'Failed to Submit data at this api endpoint');
      console.error(error);
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
        POST API METHOD
      </Text>

      <TextInput
        placeholder="Enter ID"
        value={formData.id}
        // value is used for binding this input feild to formData state variable's value "id"
        onChangeText={value => handleInput('id', value)}
      />
      <TextInput
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={value => handleInput('name', value)}
      />
      <TextInput
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={value => handleInput('email', value)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default API_POST;
