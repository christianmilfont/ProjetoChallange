# ProjetoChallenge
## Descrição
#### O nosso Projeto Challenge é uma aplicação full-stack desenvolvida utilizando Java (Spring) no backend e React no frontend. O objetivo deste projeto é melhorar o quesito organizacional da Mottu, por meio de nosso sistema o qual permite controlar a criação de Motos e Motos Defeituosas. Além disso, permite salvar em um mapa (com grid para o objeto nao sair do quadrado posto) a posição da moto, verificação feita pelo Fiscal, e depois armazenar o "modelo" da ultima verificação (visando salvar a rotina de verificação de tal fiscal, para ter um meio de comprovação que ele fez essa verificação da moto que entrou no pátio e também para salvar a posiçao em que a moto ficou pela ultima vez!). 

- Em breve, adicionarei na tela do Mapa, uma maneira de ele salvar a foto dessa organização em que o fical deixou a moto, mostrando exatamente area que ela ficou.
- Na tela de Historico de verificação, adicionei em cada card as infomações do fiscal que fez essa verificação e tabem a foto do mapa

  

## Tecnologias
### Backend:
- Java com Spring Boot

- Spring Data JPA para integração com banco de dados

- Spring Security para autenticação e segurança

### Frontend:
- React para construção da interface de usuário

- Axios para realizar chamadas HTTP para o backend

- React Router para navegação entre as páginas

### Banco de Dados
- H2 em memória





```
bash
Como Rodar o Projeto
Backend (Spring Boot)
Clone este repositório:


git clone https://github.com/christianmilfont/ProjetoChallange.git
Navegue até o diretório do backend:


cd ProjetoChallange/backend
Execute o projeto com o comando Maven ou Gradle (dependendo de qual você usa):

Usando Maven:
mvn spring-boot:run


O servidor backend estará disponível em http://localhost:8080.

Frontend (React)
Navegue até o diretório do frontend:

cd ProjetoChallange/frontend
Instale as dependências:
npm install
Inicie o servidor de desenvolvimento:
npm start
O frontend estará disponível em http://localhost:3000.
