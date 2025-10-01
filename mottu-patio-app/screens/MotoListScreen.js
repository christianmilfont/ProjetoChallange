import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Alert, Button } from "react-native";
import { getMotos, deleteMoto } from "../api/Api";

export default function MotoListScreen({ navigation }) {
  const [motos, setMotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMotos();
  }, []);

  const fetchMotos = async () => {
    const data = await getMotos();
    setMotos(data);
    setLoading(false);
  };

  const handleDelete = (id) => {
  Alert.alert(
    "Confirmação",
    "Deseja realmente excluir esta moto?",
    [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            console.log("Excluir moto com id:", id);
            await deleteMoto(id); // Exclui a moto

            // Atualize a lista localmente
            const updatedMotos = motos.filter((moto) => moto.id !== id);
            setMotos(updatedMotos); // Atualiza a lista no frontend

            console.log("Moto excluída com sucesso!");
          } catch (error) {
            console.error("Erro ao excluir moto:", error);
            Alert.alert("Erro", "Não foi possível excluir a moto.");
          }
        },
      },
    ]
  );
};



  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando motos...</Text>
        <Button title="Voltar para Home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }

  if (motos.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Nenhuma moto encontrada.</Text>
        <Button title="Voltar para Home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
     

      <FlatList
        data={motos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>
              {item.marca} {item.modelo}
            </Text>
            <Text>Ano: {item.ano}</Text>
            <Text>Cor: {item.cor}</Text>
            <Text>Cilindrada: {item.cilindrada}cc</Text>
            <Text>Status: {item.status}</Text>
            <Text>Posição: {item.posicao}</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 8,
                justifyContent: "space-between",
              }}
            >
              <Button
                title="Editar"
                onPress={() => navigation.navigate("MotoEditScreen", { moto: item })}
              />
              <Button
                title="Excluir"
                color="red"
                onPress={() => {
                  console.log("Botão de excluir clicado");
                  console.log("ID da moto a ser excluída:", item.id);

                  handleDelete(item.id);
                }}
              />

            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
