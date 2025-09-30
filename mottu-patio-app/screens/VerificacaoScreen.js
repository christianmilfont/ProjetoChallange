import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { getMotos } from "../api/Api";

export default function VerificacaoScreen({ navigation }) {
  const [motosDisponiveis, setMotosDisponiveis] = useState([]);
  const [motosManutencao, setMotosManutencao] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMotos();
  }, []);

  // Função para pegar motos e separar por status
  const fetchMotos = async () => {
    try {
      const data = await getMotos();
      const motosDisponiveis = data.filter(moto => moto.status === "DISPONIVEL");
      const motosManutencao = data.filter(moto => moto.status === "MANUTENCAO");
      setMotosDisponiveis(motosDisponiveis);
      setMotosManutencao(motosManutencao);
    } catch (error) {
      console.error("Erro ao buscar motos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Renderiza as motos em uma tabela
  const renderMoto = ({ item }) => (
    <View style={styles.motoItem}>
      <Text style={styles.motoText}>{item.marca} {item.modelo}</Text>
      <Text>Status: {item.status}</Text>
      <Text>Posição: {item.posicao}</Text>
    </View>
  );

  // Carregando
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando motos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Tabela para Motos Disponíveis */}
      <Text style={styles.tableTitle}>Motos Disponíveis</Text>
      <FlatList
        data={motosDisponiveis}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMoto}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma moto disponível.</Text>}
      />

      {/* Tabela para Motos em Manutenção */}
      <Text style={styles.tableTitle}>Motos em Manutenção</Text>
      <FlatList
        data={motosManutencao}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMoto}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma moto em manutenção.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  motoItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
  },
  motoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tableTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
  },
  emptyText: {
    textAlign: "center",
    color: "gray",
  },
});
