import React from 'react';
import { View } from 'react-native';
import JSX from './src/components/JSX';
import OnPress from './src/components/OnPress';
import UseStateHook from './src/components/UseStateHook';
import Props from './src/components/Props';
import InputText from './src/components/InputText';
import Styling from './src/components/Styling';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';
import LoginForm from './src/components/LoginForm';
import ContactListScreen from './src/screens/Contact/ContactListScreen';

const App = () => {
  return (
    <View style={{ flex:1}}>
      {/* 
      <View> just like div in HTML</View>
      <Text>Tahir Mobile App Developer</Text>
      <Button
        title='Tahir'
      />
      <First/> */}

      {/*  step: 1 */}
      {/* <JSX /> */}

      {/*  step: 2 */}
      {/* <OnPress/> */}

      {/*  step: 3 */}
      {/* <UseStateHook/> */}

      {/*  step: 4 */}
      {/* <Props /> */}

      {/*  step: 5 */}
      {/* <InputText/>  */}

      {/*  step: 6 */}
      {/* <Styling /> */}

      {/*  step: 7 */}
      {/* <FlatListScreen/> */}

      {/*  step: 8 */}
      {/* <SectionListScreen /> */}

      {/*  step: 9*/}
      {/* <LoginForm /> */}
      <ContactListScreen/>
    </View>
  );
};

export default App;
