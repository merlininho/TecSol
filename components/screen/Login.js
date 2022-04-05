import React, {useState} from 'react';
import {View, ImageBackground, TouchableOpacity, TextInput, Text} from 'react-native';
import style from '../styles/STLLogin';

const Login_Dark_Theme = () => {
   
    const [user, setUser] = useState(null)
    const [password, setPassword] = useStatete(null)

    return (
        <View style={style.container}>
            <ImageBackground source={require('../../assets/Tela_Login_Dark_Theme.png')} style={style.fundo}>
                <Text style={style.TXTUsuario_Dark}>Nome de Usuario</Text>
                <TextInput 
                    onChangeText={value => setUser(value)}
                    style={style.INPUsuario_Dark} 
                    placeholder="Nome de usuario"
                />
                <Text style={style.TXTSenha_Dark}>Senha</Text>
                <TextInput 
                    onChangeText={value => setPassword(value)}
                    style={style.INPSenha_Dark} 
                    placeholder="Senha" 
                    secureTextEntry
                />
                <TouchableOpacity style={style.BTNLogin_Dark}>
                    <Text style={style.TXTButton_Dark}>Fazer login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const Login_Light_Theme = () => {

    const [user, setUser] = useState(null)
    const [password, setPassword] = useStatete(null)

    return (
        <View style={style.container}>
            <ImageBackground source={require('../../assets/Tela_Login_Light_Theme.png')} style={style.fundo}>
                <Text style={style.TXTUsuario_Light}>Nome de Usuario</Text>
                <TextInput
                    onChangeText={value => setUser(value)}
                    leftIcon={{ type: 'font-awesome', name: 'lock'}} 
                    style={style.INPUsuario_Light} 
                    placeholder="Nome de usuario"
                />
                <Text style={style.TXTSenha_Light}>Senha</Text>
                <TextInput 
                    style={style.INPSenha_Light} 
                    placeholder="Senha" 
                    secureTextEntry
                    onChangeText={value => setPassword(value)}
                    leftIcon={{ type: 'font-awesome', name: 'lock'}}
                />
                <TouchableOpacity style={style.BTNLogin_Light}>
                    <Text style={style.TXTButton_Light}>Fazer login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const Login = ({dark_light}) => {
    if(dark_light === 0)
    {
        return <Login_Dark_Theme/>
    }
    else if(dark_light === 1)
    {
        return <Login_Light_Theme/>
    }
}
export default Login;
