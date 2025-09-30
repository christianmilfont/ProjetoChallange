import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import axios from "axios";

export default function CadastroScreen({ navigation }) {
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");

  const handleRegister = async () => {
    if (username && password) {
      try {
        const response = await axios.post("http://localhost:8080/api/create/register", {
          username,
          password,
          role,
        });
        if (response.status === 200) {
          navigation.navigate("Login");
        }
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
      }
    } else {
      alert("Preencha todos os campos.");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TextInput
        label="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Cadastrar
      </Button>
      <Button mode="text" onPress={() => navigation.navigate("Login")}>
        Já tem uma conta? Faça login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});
