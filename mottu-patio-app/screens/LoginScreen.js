import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet } from 'react-native';
import { login } from '../api/Api';  

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const data = await login(email, nome);
      // Se o login for bem-sucedido, você pode redirecionar o usuário para outra página
      console.log('Usuário logado:', data);
      navigation.navigate('HomeScreen');  // Substitua pela tela inicial do seu app
    } catch (err) {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        secureTextEntry
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LoginPage;
