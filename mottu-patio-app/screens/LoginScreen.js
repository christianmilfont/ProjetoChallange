import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { login } from '../api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import i18n from '../services/i18n';
import AnimatedThemeButton from '../utils/AnimatedThemeButton'; 
//  import do novo botão

const LoginPage = ({ navigation, isDarkTheme, setIsDarkTheme }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { colors } = theme;
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState('');
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleLogin = async () => {
    if (!email || !nome || !endereco || !telefone) {
      setError(t('errorFillAllFields'));
      return;
    }

    try {
      const data = await login(email, nome, endereco, telefone);
      await AsyncStorage.setItem('user', JSON.stringify(data));
      navigation.navigate('HomeScreen');
    } catch (err) {
      setError(t('errorInvalidLogin'));
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    AsyncStorage.setItem('appLanguage', lang);
    setCurrentLang(lang);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>{t('loginTitle')}</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Campos */}
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder={t('placeholderEmail')}
        placeholderTextColor={colors.placeholder}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder={t('placeholderName')}
        placeholderTextColor={colors.placeholder}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder={t('placeholderAddress')}
        placeholderTextColor={colors.placeholder}
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.surface }]}
        placeholder={t('placeholderPhone')}
        placeholderTextColor={colors.placeholder}
        value={telefone}
        onChangeText={setTelefone}
      />

      <Button mode="contained" onPress={handleLogin} style={{ marginTop: 15 }}>
        {t('buttonLogin')}
      </Button>

      <View style={styles.switchContainer}>
        <Text style={{ color: colors.primary, marginRight: 10 }}>
          {t('themeLabel', { theme: isDarkTheme ? 'Escuro' : 'Claro' })}
        </Text>

        {/*  Nosso novo botão animado */}
        <AnimatedThemeButton
          isDarkTheme={isDarkTheme}
          toggleTheme={() => setIsDarkTheme(!isDarkTheme)}
        />
      </View>

      {/* Idiomas */}
      <Button
        mode={currentLang === 'pt' ? 'contained' : 'outlined'}
        style={styles.languageButton}
        onPress={() => changeLanguage('pt')}
      >
        {t('ptLanguage')}
      </Button>
      <Button
        mode={currentLang === 'es' ? 'contained' : 'outlined'}
        style={styles.languageButton}
        onPress={() => changeLanguage('es')}
      >
        {t('esLanguage')}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderWidth: 1, marginBottom: 15, paddingLeft: 10, borderRadius: 5 },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
  switchContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  languageButton: { marginTop: 10, marginBottom: 10 },
});

export default LoginPage;
