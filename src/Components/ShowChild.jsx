

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ShowChild = () => {


  useEffect(() => {
// for Un-mouting component you must use this below return() method 
    return () => {
      console.log('Child Component Unmounted!')
    }
  }, [])


  return (
    <View>


      <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 600, marginVertical: 20 }}> Child Component</Text>





    </View>
  )
}

export default ShowChild