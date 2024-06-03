import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Loading');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Correo"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Clave"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.buttonContainer}>
          <Button title="Entrar" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 220,
    height: 70,
    marginBottom: 220,
  },
  inputContainer: {
    width: '110%',
    flex: 1,
    borderRadius: 10,
    borderTopLeftRadius: 50,
    backgroundColor: '#192A57',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    height: 30, // Altura reducida
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5, // Margen inferior reducido
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    fontSize: 12, // Tamaño de la fuente reducido
  },
  roundedInput: {
    borderRadius: 10, // Reducimos el radio del borde
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 100, // Margen inferior reducido
    height: 20, // Altura reducida
  },
});

export default LoginScreen;
