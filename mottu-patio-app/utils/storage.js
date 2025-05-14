import AsyncStorage from '@react-native-async-storage/async-storage';

export const salvarDado = async (chave, valor) => {
  await AsyncStorage.setItem(chave, JSON.stringify(valor));
};

export const lerDado = async (chave) => {
  const dado = await AsyncStorage.getItem(chave);
  return dado ? JSON.parse(dado) : null;
};

export const removerDado = async (chave) => {
  await AsyncStorage.removeItem(chave);
};