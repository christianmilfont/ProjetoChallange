import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Verificar Motos" onPress={() => navigation.navigate('Verificacao')} />
      <Button title="Cadastrar Moto" onPress={() => navigation.navigate('CadastroMoto')} />
      <Button title="Histórico" onPress={() => navigation.navigate('Historico')} />
      <Button title="Preferências" onPress={() => navigation.navigate('Preferencias')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: 10, padding: 20 },
});