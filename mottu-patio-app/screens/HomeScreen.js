import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { Button, Card } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={{ color: colors.primary, textAlign: "center" }}>
            Gestão de Motos
          </Text>
        </Card.Content>
      </Card>
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
        onPress={() => navigation.navigate("Motos edição")}
      >
          Edição de Motos
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
});
