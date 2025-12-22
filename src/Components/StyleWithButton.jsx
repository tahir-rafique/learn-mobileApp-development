import { View, Text, TouchableOpacity, Button, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

const StyleWithButton = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 500, textAlign: 'center' }}>Touchable Opacity vs Touchable Highlight</Text>

      <Button title='Simple Button' color={'red'} />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Touchable Opacity</Text>
      </TouchableOpacity>


      <TouchableHighlight
        style={styles.button}
        onPress={() => console.log('Hello')}  // without onPress it not work like button don't show any effect if onPress not use.
        underlayColor={'#3a1078'}
      >
        <Text style={styles.buttonText}>Touchable Hightlight</Text>
      </TouchableHighlight>
    </View>
  )
}

export default StyleWithButton


const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: '#4e21aa',
    padding: 20,
    borderRadius: 25,
    elevation: 5,  // shadow on only android-device
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },

})