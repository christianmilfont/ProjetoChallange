import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Button, Switch, useTheme } from 'react-native-paper';
import { login } from '../api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../i18n'; // IMPORTANTE: ajuste o caminho!

const LoginPage = ({ navigation, isDarkTheme, setIsDarkTheme }) => {
  const theme = useTheme();
  const { colors } = theme;

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !nome || !endereco || !telefone) {
      setError(i18n.t('errorFillAllFields'));
      return;
    }

    try {
      const data = await login(email, nome, endereco, telefone);
      await AsyncStorage.setItem('user', JSON.stringify(data));
      console.log('Usuário logado:', data);
      navigation.navigate('HomeScreen');
    } catch (err) {
      setError(i18n.t('errorInvalidLogin'));
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>{i18n.t('loginTitle')}</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder={i18n.t('placeholderEmail')}
        placeholderTextColor={colors.placeholder}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder={i18n.t('placeholderName')}
        placeholderTextColor={colors.placeholder}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder={i18n.t('placeholderAddress')}
        placeholderTextColor={colors.placeholder}
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder={i18n.t('placeholderPhone')}
        placeholderTextColor={colors.placeholder}
        value={telefone}
        onChangeText={setTelefone}
      />
      
      <Button mode="contained" onPress={handleLogin} style={{ marginTop: 15 }}>
        {i18n.t('buttonLogin')}
      </Button>

      <View style={styles.switchContainer}>
        <Text style={{ color: colors.primary, marginRight: 10 }}>
          {i18n.t('themeLabel', { theme: isDarkTheme ? 'Escuro' : 'Claro' })}
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
