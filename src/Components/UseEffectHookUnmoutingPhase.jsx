//  useEffectHook --- Life Cycle Method --- of Functional Component.
//  Unmounting pahse: 3


import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import ShowChild from './ShowChild';

const UseEffectHookUnmoutingPhase = () => {

  const [showChild, setShowChild] = useState(false);


  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 600, marginVertical: 20 }}>UseEffectHook Unmouting Phase</Text>

      <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 600, marginVertical: 20 }}> Parent Component</Text>

      {showChild ? <ShowChild /> : null}

      <Button
        title='Toggle'
        onPress={() => setShowChild(prev => !prev)}
      />
    </View>
  )
}

export default UseEffectHookUnmoutingPhase