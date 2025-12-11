import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

const Props = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);

  function updateCount() {
    setCount(count + 1);
  }

  const updateItems = () => {
    setItem(item * 4);
  }

  return (
    <View>
      <Text 
      
      style={{ fontSize: 30 }}>Prop</Text>

      <Child data={count} items={item} />

      <View style={{ marginTop: 20 }}>
        <Button



          title='Add Count'
          onPress={() => updateCount()}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          title='Increase Items'
          onPress={updateItems}
        />
      </View>
    </View>
  )
}

export default Props