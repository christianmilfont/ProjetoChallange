import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme, Button, Card, Text, Menu, Avatar } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../i18n'; // Importação do i18n

export default function HomeScreen({ navigation, isDarkTheme, setIsDarkTheme }) {
  const theme = useTheme();
  const { colors } = theme;

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    console.log('Usuário deslogado');
    navigation.navigate("Login");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Card style={styles.card}>
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ color: colors.primary, textAlign: "center" }}
          >
            {i18n.t('homeTitle')}
          </Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("MotoList")}
      >
        {i18n.t('homeListMotos')}
      </Button>
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("Verificacao")}
      >
        {i18n.t('homeCheckMotos')}
      </Button>
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("CadastroMoto")}
      >
        {i18n.t('homeRegisterMoto')}
      </Button>
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("Historico")}
      >
        {i18n.t('homeHistory')}
      </Button>
      <Button
        mode="outlined"
        style={[styles.button, { borderColor: colors.primary }]}
        onPress={() => navigation.navigate("Preferencias")}
      >
        {i18n.t('homePreferences')}
      </Button>

      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={openMenu}>
          <Avatar.Text size={50} label="C" style={{ backgroundColor: colors.primary }} />
        </TouchableOpacity>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Avatar.Text size={50} label="C" style={{ backgroundColor: colors.primary }} />}
        >
          <Menu.Item onPress={handleLogout} title={i18n.t('logout')} />
        </Menu>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});
