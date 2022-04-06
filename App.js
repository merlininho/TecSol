import * as React from 'react';
import { View } from 'react-native';
import Login from './components/screen/Login';
import Cadastro from './components/screen/Cadastro';
import style from './components/styles/STLApp';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigatior} from '@react-navigation/stack';

const Stack = createStackNavigatior();

export function App_navigation() {
  return(
    <Stack.Navigator
      initialRouteName ="Cadastro"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{title: 'Cadastro'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login'}, {headerLeft: null}}
      />
    
    </Stack.Navigator>
  )
};

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
