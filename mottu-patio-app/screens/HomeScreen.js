import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Button, Card, Text, Switch } from "react-native-paper";

export default function HomeScreen({ navigation, isDarkTheme, setIsDarkTheme }) {
  const theme = useTheme(); // Pega o tema atual
  const { colors } = theme; // Obtém as cores do tema

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
        style={[styles.button, { backgroundColor: colors.primary }]} // Altera a cor do botão
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
        style={[styles.button, { borderColor: colors.primary }]} // Cor do botão outlined
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
