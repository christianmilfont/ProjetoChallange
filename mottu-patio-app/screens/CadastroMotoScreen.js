import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function CadastroMotoScreen() {
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text>Placa:</Text>
      <TextInput value={placa} onChangeText={setPlaca} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Modelo:</Text>
      <TextInput value={modelo} onChangeText={setModelo} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Salvar" onPress={() => alert(`Moto salva: ${placa} - ${modelo}`)} />
    </View>
  );
}