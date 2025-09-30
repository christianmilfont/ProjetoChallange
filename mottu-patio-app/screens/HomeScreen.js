import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme, Button, Card, Text, Menu, Avatar } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation, isDarkTheme, setIsDarkTheme }) {
  const theme = useTheme(); // Usando useTheme para obter o tema
  const { colors } = theme;

  // Estado para controlar a visibilidade do Menu de logout
  const [visible, setVisible] = useState(false);

  // Função para abrir o Menu
  const openMenu = () => setVisible(true);

  // Função para fechar o Menu
  const closeMenu = () => setVisible(false);

  // Função de logout
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user'); // Remover os dados do usuário do AsyncStorage
    console.log('Usuário deslogado');
    navigation.navigate("Login"); // Redireciona para a tela de login
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Card style={styles.card}>
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ color: colors.primary, textAlign: "center" }}
          >
            Gestão de Motos
          </Text>
        </Card.Content>
      </Card>

      {/* Botões de navegação */}
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("MotoList")}
      >
        Listagem de Motos
      </Button>
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("Verificacao")}
      >
        Verificar Motos
      </Button>
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("CadastroMoto")}
      >
        Cadastrar Moto
      </Button>
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("Historico")}
      >
        Histórico
      </Button>
      <Button
        mode="outlined"
        style={[styles.button, { borderColor: colors.primary }]}
        onPress={() => navigation.navigate("Preferencias")}
      >
        Preferências
      </Button>

      {/* Avatar e Menu de Logout */}
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={openMenu}>
          <Avatar.Text size={50} label="C" style={{ backgroundColor: colors.primary }} />
        </TouchableOpacity>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Avatar.Text size={50} label="C" style={{ backgroundColor: colors.primary }} />}
        >
          <Menu.Item onPress={handleLogout} title="Logout" />
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
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
