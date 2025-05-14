import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PreferenciasScreen() {
  const [nomeFiscal, setNomeFiscal] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('nomeFiscal').then(value => {
      if (value) setNomeFiscal(value);
    });
  }, []);

  const salvarPreferencias = async () => {
    await AsyncStorage.setItem('nomeFiscal', nomeFiscal);
    alert('Preferência salva!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome do Fiscal:</Text>
      <TextInput value={nomeFiscal} onChangeText={setNomeFiscal} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Salvar Preferência" onPress={salvarPreferencias} />
    </View>
  );
}