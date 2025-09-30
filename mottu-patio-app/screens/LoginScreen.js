import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Button, Switch, useTheme } from 'react-native-paper'; // Alterando a importação do Button
import { login } from '../api/Api';  
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation, isDarkTheme, setIsDarkTheme }) => {
  const theme = useTheme(); // Usando useTheme para obter o tema
  const { colors } = theme;

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Verificar se os campos obrigatórios estão preenchidos
    if (!email || !nome || !endereco || !telefone) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const data = await login(email, nome, endereco, telefone);

      // Salvar os dados do usuário no AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(data));

      // Se o login for bem-sucedido, redireciona para a tela principal
      console.log('Usuário logado:', data);
      navigation.navigate('HomeScreen');  
    } catch (err) {
      setError('Credenciais inválidas ou erro no login. Tente novamente.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]} // Usando tema para os campos
        placeholder="Email"
        placeholderTextColor={colors.placeholder}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder="Nome"
        placeholderTextColor={colors.placeholder}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder="Endereço"
        placeholderTextColor={colors.placeholder}
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder="Telefone"
        placeholderTextColor={colors.placeholder}
        value={telefone}
        onChangeText={setTelefone}
      />
      
      <Button mode="contained" onPress={handleLogin} style={{ marginTop: 15 }}>
        Entrar
      </Button>

      {/* Alternador de tema */}
      <View style={styles.switchContainer}>
        <Text style={{ color: colors.primary, marginRight: 10 }}>
          Tema {isDarkTheme ? "Escuro" : "Claro"}
        </Text>
        <Switch
          value={isDarkTheme}
          onValueChange={() => setIsDarkTheme(!isDarkTheme)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LoginPage;
