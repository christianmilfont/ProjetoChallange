import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import VerificacaoScreen from "./screens/VerificacaoScreen";
import CadastroMotoScreen from "./screens/CadastroMotoScreen";
import HistoricoScreen from "./screens/HistoricoScreen";
import PreferenciasScreen from "./screens/PreferenciasScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Verificacao" component={VerificacaoScreen} />
        <Stack.Screen name="CadastroMoto" component={CadastroMotoScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="Preferencias" component={PreferenciasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}