# Mottu Pátio App

O **Mottu Pátio App** é uma aplicação mobile (APK) destinada a organizar o pátio de motos, facilitando as rotinas de verificação dos fiscais de campo/pátio, auxiliando no cadastro e histórico de motos e de verificações dessas motos. Através desse app, fiscais de campo podem realizar rotinas de verificação e atualização de dados das motos no pátio. O aplicativo também permite que os usuários gerenciem suas preferências.

## Grupo:
- Christian Milfont rm555345
- Iago Victor rm558450
  
---

## Tecnologias Utilizadas

### Frontend
- **React Native (Expo)** – plataforma mobile cross-platform.
- **Axios** – para requisições HTTP à API.
- **React Navigation** – para navegação entre telas.
- **FlatList** – para exibição da lista de motos.
- **AsyncStorage (opcional)** – para armazenamento local, se necessário.

### Backend
- **Java 17 / Spring Boot**
- **Spring Data JPA** – persistência de dados.
- **Spring Security** – controle de acesso (ADMIN / USER).
- **Hibernate Validator** – validação de DTOs.
- **Thymeleaf** – templates web para administração via navegador.
- ** MySQL – armazenamento das motos.

---

## Fluxo do App

- O usuário abre o MotoListScreen.

- O app busca todas as motos via getMotos() e exibe os cards.

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
