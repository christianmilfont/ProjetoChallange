import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme, Button, Card, Text, Menu, Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import i18n from '../services/i18n'; 

export default function HomeScreen({ navigation, isDarkTheme, setIsDarkTheme }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const { colors } = theme;
  const [visible, setVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login');
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    AsyncStorage.setItem('appLanguage', lang); // Salva a escolha no AsyncStorage
    setCurrentLang(lang); // Atualiza o estado do idioma atual
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={{ color: colors.primary, textAlign: 'center' }}>
            {t('homeTitle')}
          </Text>
        </Card.Content>
      </Card>

      <Button mode="contained" style={[styles.button, { backgroundColor: colors.primary }]} onPress={() => navigation.navigate('MotoList')}>
        {t('homeListMotos')}
      </Button>
      <Button mode="contained" style={[styles.button, { backgroundColor: colors.primary }]} onPress={() => navigation.navigate('Verificacao')}>
        {t('homeCheckMotos')}
      </Button>
      <Button mode="contained" style={[styles.button, { backgroundColor: colors.primary }]} onPress={() => navigation.navigate('CadastroMoto')}>
        {t('homeRegisterMoto')}
      </Button>
      <Button mode="contained" style={[styles.button, { backgroundColor: colors.primary }]} onPress={() => navigation.navigate('Historico')}>
        {t('homeHistory')}
      </Button>
      <Button mode="outlined" style={[styles.button, { borderColor: colors.primary }]} onPress={() => navigation.navigate('Preferencias')}>
        {t('homePreferences')}
      </Button>

      {/* Botões de troca de idioma */}
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

      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={openMenu}>
          <Avatar.Text size={50} label="C" style={{ backgroundColor: colors.primary }} />
        </TouchableOpacity>
        <Menu visible={visible} onDismiss={closeMenu} anchor={<Avatar.Text size={50} label="C" style={{ backgroundColor: colors.primary }} />}>
          <Menu.Item onPress={handleLogout} title={t('logout')} />
        </Menu>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  card: { marginBottom: 20 },
  button: { marginBottom: 10 },
  languageButton: { marginTop: 10, marginBottom: 10 },
  avatarContainer: { alignItems: 'center', marginTop: 20 },
});
