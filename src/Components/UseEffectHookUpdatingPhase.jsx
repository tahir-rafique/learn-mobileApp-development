//  useEffectHook --- Life Cycle Method --- of Functional Component.
//  updating pahse: 2

import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHookUpdatingPhase = () => {

  const [score, setScore] = useState(20);
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    console.log('Counter Update')
  }, [counter]);

  useEffect(() => {
    console.log('Score Update')
  }, [score]);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 600, marginVertical: 20, textAlign: 'center', width: 300, marginHorizontal: 'auto', }}>UseEffectHook Updating Phase</Text>

      <Text style={{ fontSize: 20, fontWeight: 600, marginVertical: 20, textAlign: 'center', width: 300, marginHorizontal: 'auto', }}>Counter: {counter}</Text>

      <Button
        title='Update Counter'
        onPress={() => setcounter(counter + 1)}
      />

      <Text style={{ fontSize: 20, fontWeight: 600, marginVertical: 20, textAlign: 'center', width: 300, marginHorizontal: 'auto', }}>Score: {score}</Text>
      <Button
        title='Update Score'
        onPress={() => setScore(score + 1)}
      />

      <InfoDeatils counter={counter} points={score} />
    </View>
  )
}

const InfoDeatils = ({ counter, score }) => {
  useEffect(() => {
    console.log('I am child component')
  }, [counter]);
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 600, marginVertical: 20, textAlign: 'center', width: 300, marginHorizontal: 'auto', }}>Info Details</Text>
    </View>
  )
}


export default UseEffectHookUpdatingPhase;