import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { saveMoto, getMotos } from "../Api";
import axios from "axios";

const API_BASE = "http://localhost:8080/api/motos";

export default function MotoEditScreen({ route, navigation }) {
  const { moto } = route.params; // moto selecionada
  const [form, setForm] = useState({ ...moto });

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_BASE}/${form.id}`, form);
      Alert.alert("Sucesso", "Moto atualizada!");
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível atualizar a moto.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Moto</Text>
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={form.marca}
        onChangeText={(text) => setForm({ ...form, marca: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={form.modelo}
        onChangeText={(text) => setForm({ ...form, modelo: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano"
        value={form.ano.toString()}
        keyboardType="numeric"
        onChangeText={(text) => setForm({ ...form, ano: parseInt(text) })}
      />
      {/* Adicione os outros campos: cor, cilindrada, status, posicao, latitude, longitude */}
      <Button title="Atualizar Moto" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 12, borderRadius: 6 },
});
