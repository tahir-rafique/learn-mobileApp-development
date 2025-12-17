//  useEffectHook --- Life Cycle Method --- of Functional Component.
//  mouting pahse: 1


import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'



const UseEffectHookMountingPhase = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('This is useEffect Hook.');
    console.log('Api is called.');
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 500 }}>UseEffectHook</Text>
      <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 500 }}>Count: {count}</Text>
      <Button
        title='Add Count'
        onPress={() => setCount(count + 1)}
      />
    </View>
  )
}

export default UseEffectHookMountingPhase