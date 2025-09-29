// CreateMotoScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { saveMoto } from "../api/Api";
import { Picker } from "@react-native-picker/picker";

export default function CadastroMotoScreen({ navigation }) {
  const [moto, setMoto] = useState({
    marca: "",
    modelo: "",
    ano: "",
    cor: "",
    cilindrada: "",
    status: "",
    posicao: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (field, value) => {
    setMoto({ ...moto, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      // Convertendo valores numéricos
      const payload = {
        ...moto,
        ano: parseInt(moto.ano),
        cilindrada: parseInt(moto.cilindrada),
        latitude: parseFloat(moto.latitude),
        longitude: parseFloat(moto.longitude),
      };

      await saveMoto(payload);
      Alert.alert("Sucesso", "Moto criada com sucesso!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar a moto.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastrar Nova Moto</Text>

      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={moto.marca}
        onChangeText={(text) => handleChange("marca", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={moto.modelo}
        onChangeText={(text) => handleChange("modelo", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano"
        keyboardType="numeric"
        value={moto.ano}
        onChangeText={(text) => handleChange("ano", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cor"
        value={moto.cor}
        onChangeText={(text) => handleChange("cor", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cilindrada"
        keyboardType="numeric"
        value={moto.cilindrada}
        onChangeText={(text) => handleChange("cilindrada", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Status (DISPONIVEL ou MANUTENCAO)"
        value={moto.status}
        onChangeText={(text) => handleChange("status", text)}
      />
      
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Posição</Text>
        <Picker
          selectedValue={moto.posicao}
          style={styles.picker}
          onValueChange={(itemValue) => handleChange("posicao", itemValue)}
        >
          <Picker.Item label="Selecione a posição" value="" />
          <Picker.Item label="Front" value="FRONT" />
          <Picker.Item label="Back" value="BACK" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        keyboardType="decimal-pad"
        value={moto.latitude}
        onChangeText={(text) => handleChange("latitude", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        keyboardType="decimal-pad"
        value={moto.longitude}
        onChangeText={(text) => handleChange("longitude", text)}
      />

      <Button title="Salvar Moto" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  pickerContainer: {
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  marginBottom: 12,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  }

});
