import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Button, Card, Text, Switch } from "react-native-paper";

export default function HomeScreen({ navigation, isDarkTheme, setIsDarkTheme }) {
  const theme = useTheme();
  const { colors } = theme;

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
}
