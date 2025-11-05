// App.js
import React, { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MotiView } from "moti";

import { customLightTheme, customDarkTheme } from "./utils/theme";
import './services/i18n'; // inicializa i18next

// Importando telas
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

// Wrapper para aplicar Moti em todas as telas
const AnimatedScreen = ({ children }) => (
  <MotiView
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ type: "timing", duration: 400 }}
    style={{ flex: 1 }}
  >
    {children}
  </MotiView>
);

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
            animation: "slide_from_right", // animação padrão
          }}
        >
          {/* Tela de Login */}
          <Stack.Screen name="Login" options={{ animation: "fade" }}>
            {(props) => (
              <AnimatedScreen>
                <LoginScreen
                  {...props}
                  isDarkTheme={isDarkTheme}
                  setIsDarkTheme={setIsDarkTheme}
                />
              </AnimatedScreen>
            )}
          </Stack.Screen>

          {/* Tela de Cadastro */}
          <Stack.Screen name="Cadastro" options={{ animation: "slide_from_bottom" }}>
            {(props) => (
              <AnimatedScreen>
                <CadastroScreen {...props} />
              </AnimatedScreen>
            )}
          </Stack.Screen>

          {/* Tela Home */}
          <Stack.Screen name="HomeScreen" options={{ headerShown: false, animation: "fade" }}>
            {(props) => (
              <AnimatedScreen>
                <HomeScreen {...props} />
              </AnimatedScreen>
            )}
          </Stack.Screen>

          {/* Outras telas */}
          <Stack.Screen name="MotoList" options={{ animation: "slide_from_right" }}>
            {(props) => <AnimatedScreen><MotoListScreen {...props} /></AnimatedScreen>}
          </Stack.Screen>

          <Stack.Screen name="Verificacao" options={{ animation: "slide_from_bottom" }}>
            {(props) => <AnimatedScreen><VerificacaoScreen {...props} /></AnimatedScreen>}
          </Stack.Screen>

          <Stack.Screen name="CadastroMoto" options={{ animation: "slide_from_bottom" }}>
            {(props) => <AnimatedScreen><CadastroMotoScreen {...props} /></AnimatedScreen>}
          </Stack.Screen>

          <Stack.Screen name="Historico" options={{ animation: "slide_from_right" }}>
            {(props) => <AnimatedScreen><HistoricoScreen {...props} /></AnimatedScreen>}
          </Stack.Screen>

          <Stack.Screen name="Preferencias" options={{ animation: "fade" }}>
            {(props) => <AnimatedScreen><PreferenciasScreen {...props} /></AnimatedScreen>}
          </Stack.Screen>

          <Stack.Screen name="MotoEditScreen" options={{ animation: "slide_from_right" }}>
            {(props) => <AnimatedScreen><MotoEditScreen {...props} /></AnimatedScreen>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
