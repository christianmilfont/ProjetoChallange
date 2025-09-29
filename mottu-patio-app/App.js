import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import VerificacaoScreen from "./screens/VerificacaoScreen";
import CadastroMotoScreen from "./screens/CadastroMotoScreen";
import HistoricoScreen from "./screens/HistoricoScreen";
import PreferenciasScreen from "./screens/PreferenciasScreen";
import MotoListScreen from "./screens/MotoListScreen";
import MotoEditScreen from "./screens/MotoEditScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme(); // Detecta claro ou escuro
  const theme = scheme === "dark" ? customDarkTheme  : customLightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Motos Listagem" component={MotoListScreen} />
          <Stack.Screen name="Motos Edição" component={MotoEditScreen} />
          <Stack.Screen name="Verificacao" component={VerificacaoScreen} />
          <Stack.Screen name="Cadastro Moto" component={CadastroMotoScreen} />
          <Stack.Screen name="Historico" component={HistoricoScreen} />
          <Stack.Screen name="Preferencias" component={PreferenciasScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
