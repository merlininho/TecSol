import React, {useState} from 'react';
import {View, Text, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import style from '../styles/STLCadastro';
import { useState } from 'react';

const Cadastro_Dark_Theme = () => {

    const [User, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [confirm, setConfirm] = useState(null);

    return(
        <View style={style.container}>
            <ImageBackground source={require('../../assets/Tela_Cadastro_Dark_Theme.png')} style={style.fundo}>
                <Text style={style.TXTUsuario_Dark}>Nome de usuario</Text>
                <TextInput 
                    style={style.INPUsuario_Dark}
                    onChangeText={value => setUser(value)}
                    placeholder="Usuario"
                />
                <Text style={style.TXTEmail_Dark}>E-mail</Text>
                <TextInput
                    style={style.INPEmail_Dark}
                    placeholder="E-mail"
                    onChangeText={value => setEmail(value)}
                />
                <Text style={style.TXTSenha_Dark} >Senha</Text>
                <TextInput
                    style={style.INPSenha_Dark}
                    placeholder="Senha"
                    onChangeText={value => setPassword(value)}
                    secureTextEntry
                />
                <Text style={style.TXTConfirm_Dark}>Comfirmar a senha</Text>
                <TextInput
                    style={style.INPConfirm_Dark}
                    placeholder="Confirme a senha"
                    secureTextEntry
                    onChangeText={value => setConfirm(value)}
                />
                <TouchableOpacity style={style.BTNcadastrar_Dark} >
                    <Text style={style.TXTButton_Dark}>Fazer Cadastro_Dark_Theme</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const Cadastro_Light_Theme = () => {

    const [User, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [confirm, setConfirm] = useState(null);

    return(
        <view style={style.container}>
            <ImageBackground source={require('../../assets/Tela_Cadastro_Light_Theme.png')} style={style.fundo}>
                <Text style={style.TXTUsuario_Light}>Nome de usuario</Text>
                <TextInput 
                    style={style.INPUsuario_Light}
                    onChangeText={value => setUser(value)}
                    placeholder="Usuario"
                />
                <Text style={style.TXTEmail_Light}>E-mail</Text>
                <TextInput
                    style={style.INPEmail_Light}
                    placeholder="E-mail"
                    onChangeText={value => setEmail(value)}
                />
                <Text style={style.TXTSenha_Light} >Senha</Text>
                <TextInput
                    style={style.INPSenha_Light}
                    placeholder="Senha"
                    onChangeText={value => setPassword(value)}
                    secureTextEntry
                />
                <Text style={style.TXTConfirm_Light}>Comfirmar a senha</Text>
                <TextInput
                    style={style.INPConfirm_Light}
                    placeholder="Confirme a senha"
                    secureTextEntry
                    onChangeText={value => setConfirm(value)}
                />
                <TouchableOpacity style={style.BTNcadastrar_Light} >
                    <Text style={style.TXTButton_Light}>Fazer Cadastro_Dark_Theme</Text>
                </TouchableOpacity>
            </ImageBackground>
        </view>
    )
}

const Cadastro = ({dark_light}) => {
    if(dark_light === 0)
    {
        return <Cadastro_Dark_Theme/>
    }
    else if(dark_light === 1)
    {
        return <Cadastro_Light_Theme/>
    }
}

export default Cadastro