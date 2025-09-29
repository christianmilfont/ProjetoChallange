import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Button, Card, Text, Switch } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { customLightTheme, customDarkTheme } from "../utils/theme";

export default function HomeScreen({ navigation }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? customDarkTheme : customLightTheme;
  const { colors } = theme;

  return (
    <PaperProvider theme={theme}>
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
          style={styles.button}
          onPress={() => navigation.navigate("Motos Listagem")}
        >
          Listagem de Motos
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate("Verificacao")}
        >
          Verificar Motos
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate("Cadastro Moto")}
        >
          Cadastrar Moto
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate("Historico")}
        >
          Histórico
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
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
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 12,
    elevation: 3,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 5,
  },
  switchContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
