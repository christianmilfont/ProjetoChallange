import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { customLightTheme, customDarkTheme } from "./utils/theme";

// Screens
import HomeScreen from "./screens/HomeScreen";
import VerificacaoScreen from "./screens/VerificacaoScreen";
import CadastroMotoScreen from "./screens/CadastroMotoScreen";
import HistoricoScreen from "./screens/HistoricoScreen";
import PreferenciasScreen from "./screens/PreferenciasScreen";
import MotoListScreen from "./screens/MotoListScreen";
import MotoEditScreen from "./screens/MotoEditScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // Estado central do tema
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? customDarkTheme : customLightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.primary },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }} // esconde só na Home
          >
            {(props) => (
              <HomeScreen
                {...props}
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme}
              />
            )}
          </Stack.Screen>

          <Stack.Screen
            name="MotoList"
            component={MotoListScreen}
            options={{ title: "Listagem de Motos" }}
          />

          <Stack.Screen
            name="MotoEdit"
            component={MotoEditScreen}
            options={{ title: "Editar Moto" }}
          />

          <Stack.Screen
            name="Verificacao"
            component={VerificacaoScreen}
            options={{ title: "Verificação de Motos" }}
          />

          <Stack.Screen
            name="CadastroMoto"
            component={CadastroMotoScreen}
            options={{ title: "Cadastro de Moto" }}
          />

          <Stack.Screen
            name="Historico"
            component={HistoricoScreen}
            options={{ title: "Histórico" }}
          />

          <Stack.Screen
            name="Preferencias"
            component={PreferenciasScreen}
            options={{ title: "Preferências" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
