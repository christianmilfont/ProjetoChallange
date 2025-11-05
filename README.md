# Mottu Pátio App

O **Mottu Pátio App** é uma aplicação mobile (APK) destinada a organizar o pátio de motos, facilitando as rotinas de verificação dos fiscais de campo/pátio, auxiliando no cadastro e histórico de motos e de verificações dessas motos. Através desse app, fiscais de campo podem realizar rotinas de verificação e atualização de dados das motos no pátio. O aplicativo também permite que os usuários gerenciem suas preferências.

## Grupo:
- Christian Milfont rm555345
- Iago Victor rm558450
  
---

## Tecnologias Utilizadas

####  Tecnologias Utilizadas

- React Native (Expo)

- React Native Paper

- Moti (animações)

- React Native Reanimated

- i18next (traduções)

- AsyncStorage (persistência local)

### Backend
- **Java 17 / Spring Boot** e **.NET ASPNETCORE 8:0**
- **Spring Data JPA** – persistência de dados.
- **Spring Security** – controle de acesso (ADMIN / USER).
- **Hibernate Validator** – validação de DTOs.
- **Thymeleaf** – templates web para administração via navegador.
- ** MySQL – armazenamento das motos, login e etc.
-
---
## O que foi adicionado nesta versão
 1. Botão Animado de Troca de Tema (Claro/Escuro)

Criado um componente reutilizável AnimatedThemeButton, localizado em:

```
    src/utils/AnimatedThemeButton.js
```

### O botão utiliza Moti para:

- Fazer rotação e “pulso” (escala animada);

- Alternar suavemente entre ☀️ (tema claro) e 🌙 (tema escuro);

- Alterar gradualmente a cor de fundo;

- Exibir partículas animadas simulando estrelas no modo escuro.

2. Transição Suave de Tema na Tela

A tela de Login (LoginPage.js) agora possui uma transição suave de cor de fundo ao alternar entre os temas, proporcionando uma experiência mais fluida.

- O efeito é feito com MotiView e animação de backgroundColor.

3. Código Modular e Limpo

A lógica de animação e renderização visual foi isolada em um componente externo (AnimatedThemeButton) para manter o LoginPage mais limpo e fácil de manter.

- O botão pode ser reutilizado em qualquer tela com apenas uma linha:

```
    <AnimatedThemeButton
    isDarkTheme={isDarkTheme}
    toggleTheme={() => setIsDarkTheme(!isDarkTheme)}
    />
```

---
## Transições entre telas

Configuradas no Native Stack Navigator

Exemplos de animações:

- fade → transição suave

- slide_from_bottom → tela entra de baixo (iOS vertical)

- slide_from_right → tela entra da direita (padrão)

Cada tela envolta em MotiView para suavizar a entrada e saída

---

## Fluxo do App

- O usuário abre o MotoListScreen.

- O app busca todas as motos via getMotos() e exibe os cards.

# Para rodar:
É necessario clonar os repositorios 
https://github.com/christianmilfont/DOTNET-MOTTU.git
https://github.com/christianmilfont/Java-Mottu.git

Cada repo tem como rodar cada BackEnd!
### Cada card possui:

- Editar → navega para tela de edição.

- Excluir → alerta de confirmação e deleta a moto via API.

- Tela de criação (CreateMotoScreen) envia novo registro via saveMoto().

Todas as alterações são refletidas imediatamente na lista.


### Configurando projeto
- git clone ...
- cd mottu-patio-app
- npm install
- npx expo start
