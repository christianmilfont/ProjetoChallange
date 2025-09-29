# Mottu Pátio App

O **Mottu Pátio App** é uma aplicação mobile (APK) destinada a organizar o pátio de motos, facilitando as rotinas de verificação dos fiscais de campo/pátio, auxiliando no cadastro e histórico de motos. Através desse app, fiscais de campo podem realizar rotinas de verificação e atualização de dados das motos no pátio. O aplicativo também permite que os usuários gerenciem suas preferências.

## Grupo:
- Christian Milfont rm555345
- Anderson Pedro rm557002
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
- **H2 / MySQL / outro banco** – armazenamento das motos.

---

## Estrutura do Backend

- **`MotoController`**  
  Controlador Thymeleaf para administração web.  
  Permite:
  - Listagem de motos (`/motos/listagem`)
  - Criação e edição via formulário (`/motos/new`, `/motos/edit/{id}`)
  - Exclusão (`/motos/delete/{id}`)

- **`MotoRestController`**  
  Controlador REST para consumo pelo app mobile.  
  Endpoints:
  - `GET /api/motos` – lista todas as motos
  - `GET /api/motos/{id}` – busca moto específica
  - `POST /api/motos` – cria nova moto (JSON)
  - `PUT /api/motos/{id}` – atualiza moto existente (JSON)
  - `DELETE /api/motos/{id}` – remove moto

---

## Estrutura do Frontend

- **`Api.js`** – centraliza as chamadas à API REST:
  ```javascript
  import axios from "axios";

  const API_BASE = "http://localhost:8080/api/motos"; // ajuste IP conforme emulador/dispositivo

  export async function getMotos() { ... }
  export async function saveMoto(moto) { ... }
  export async function updateMoto(id, moto) { ... }
  export async function deleteMoto(id) { ... }
  ```
## MotoListScreen.js – tela de listagem:

Exibe todas as motos em um FlatList

Cada card possui botões de Editar e Excluir

Exclusão com Alert de confirmação

### Navegação para tela de edição (MotoEditScreen)

- MotoEditScreen.js – tela de atualização de motos:

Formulário pré-preenchido com dados da moto

Atualiza via PUT /api/motos/{id}

Retorna para a lista após atualização

### Tela de criação:

Reaproveita formulário semelhante à edição

Cria moto via POST /api/motos

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
