import * as React from 'react'
import { View } from 'react-native';
import Login from './components/screen/Login';
import Cadastro from './components/screen/Cadastro';
import style from './components/styles/STLApp';

export function App() {
  return (
    <View style={style.container}>
      <Login dark_light={0}/>
    </View>
  );
}

export function App2() {
  return (
    <View style={style.container}>
      <Cadastro dark_light={1}/>
    </View>
  )
}
export default App
