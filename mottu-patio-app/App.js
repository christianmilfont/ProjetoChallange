import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { customLightTheme, customDarkTheme } from "./utils/theme";

// Importando as telas
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "./screens/CadastroScreen";
import MotoListScreen from "./screens/MotoListScreen";
import VerificacaoScreen from "./screens/VerificacaoScreen";
import CadastroMotoScreen from "./screens/CadastroMotoScreen";
import HistoricoScreen from "./screens/HistoricoScreen";
import PreferenciasScreen from "./screens/PreferenciasScreen";
import MotoEditScreen from "./screens/MotoEditScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? customDarkTheme : customLightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.primary },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          {/* Tela de Login */}
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme}
              />
            )}
          </Stack.Screen>

          {/* Tela de Cadastro */}
          <Stack.Screen name="Cadastro" component={CadastroScreen} />

          {/* Tela Home com ocultação de header */}
          <Stack.Screen
            name="HomeScreen"
            options={{ headerShown: false }}
            component={HomeScreen}
          />


          {/* Outras telas */}
          <Stack.Screen name="MotoList" component={MotoListScreen} />
          <Stack.Screen name="Verificacao" component={VerificacaoScreen} />
          <Stack.Screen name="CadastroMoto" component={CadastroMotoScreen} />
          <Stack.Screen name="Historico" component={HistoricoScreen} />
          <Stack.Screen name="Preferencias" component={PreferenciasScreen} />
          <Stack.Screen name="MotoEditScreen" component={MotoEditScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
