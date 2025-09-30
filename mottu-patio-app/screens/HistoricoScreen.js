import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function HistoricoScreen() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    // Carregar histórico (isso pode vir de uma API ou de AsyncStorage)
    // Para fins de exemplo, estamos usando dados mockados.
    const dadosHistorico = [
      {
        id: '1',
        data: '2025-09-29',
        motosDisponiveis: 10,
        motosManutencao: 2,
        duracao: '5 min',
      },
      {
        id: '2',
        data: '2025-09-28',
        motosDisponiveis: 8,
        motosManutencao: 5,
        duracao: '8 min',
      },
      // Adicione mais histórico conforme necessário
    ];
    setHistorico(dadosHistorico);
  }, []);

  const renderHistoricoItem = ({ item }) => (
    <View style={styles.historicoItem}>
      <Text style={styles.historicoData}>{item.data}</Text>
      <Text>Motos Disponíveis: {item.motosDisponiveis}</Text>
      <Text>Motos em Manutenção: {item.motosManutencao}</Text>
      <Text>Duração da Verificação: {item.duracao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Verificações</Text>
      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={renderHistoricoItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma verificação realizada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  historicoItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
  },
  historicoData: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: 'gray',
  },
});
