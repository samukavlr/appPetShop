import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,Alert} from 'react-native';
import {styles} from './styles'
import img from '../../../assets/Logo.png'
import Icon from '../../../assets/imgIcongoogle.png'


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function Alertfunc(){
     Alert.alert('ATENÇÃO!!', 'Entrar sem Cadastro')

   

  }
    
 
  const handleLogin = () => {
    // implementar lógica de autenticação
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vida Animal</Text>
      <Image source={img} style={styles.logo} />
      <TextInput 
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
          <Text style={styles.esquciminhasenha}>ESQUECI MINHA SENHA </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Alertfunc} style={styles.button} >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <View style={styles.criarconta}>
        <TouchableOpacity>
          <Text style={styles.textcriaraconta}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textcriaraconta}>
            ENTRAR SEM CADASTRO
          </Text>
        </TouchableOpacity>
      </View>
     
      <TouchableOpacity style={styles.buttonlogar} >
        <Image source={Icon} style={styles.icon} />
        <Text style={styles.buttonTextgoogle}>Logar com o Google</Text>
      </TouchableOpacity>
     
      
    </View>
  );
}

