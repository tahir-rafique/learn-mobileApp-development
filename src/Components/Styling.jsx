import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';

const Styling = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          backgroundColor: 'pink',
          marginBottom: 20,
          padding: 10,
        }}
      >
        Styling
      </Text>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>Inline Styling</Text>
      <Text style={style.text}>Internal Styling</Text>
      <Text style={styles.text}>External Styling</Text>

      <Text style={[styles.text, style.text, { padding: 10 }]}>
        Mix Styling
      </Text>
    </View>
  );
};

export default Styling;

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
    marginVertical: 20,
    backgroundColor: 'orange',
    textAlign: 'center',
  },
});
