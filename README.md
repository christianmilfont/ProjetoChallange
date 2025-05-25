# Projeto DotNet para nossa aplicação da Mottu!
### Projeto Challenge (.NET)

Este é um projeto desenvolvido como parte de um desafio técnico. A aplicação foi construída utilizando **.NET 6** e segue boas práticas de estrutura e organização para aplicações web.

## Grupo:
- Christian Milfont rm555345
- Anderson Pedro rm557002
- Iago Victor rm558450

##  Tecnologias Utilizadas

- ASP.NET Core 8
- Swagger (OpenAPI)
- Entity Framework Core
- Oracle Entity Framework
- C#
- RESTful APIs

##  Estrutura do Projeto

- `Controllers/` – Endpoints da aplicação.
- `Models/` – Classes de domínio e entidades.
- `Mappings/` - Mapeamentos das entidades via Fluent API
- `Context/` – Contexto do banco de dados com EF Core.
- `Program.cs` – Configuração principal da aplicação.
- `appsettings.json` – Configurações da aplicação.

### Por que separar isso em Mappings/?
- Ajuda a manter o DbContext limpo.
- Facilita a manutenção e leitura.
- É uma prática comum em projetos maiores ou mais organizados.

## Funcionalidades para rotinas de verificação de Motos (Em breve para salvar dados das posições das motos e por quem foi feito essa rotina)
CRUD completo de entidades

Documentação da API via Swagger

Organização modular para facilitar expansão


## Como Rodar Localmente
LEMBRANDO - EM APPJSON: AJUSTAR A CONEXÃO
``` 
 "ConnectionStrings": {
    "Oracle": "User Id=xxx;Password=xxx;Data Source=oracle.fiap.com.br:1521/orcl"
  }
```
1. Clone o repositório:

```bash
git clone https://github.com/christianmilfont/ProjetoChallange.git
cd ProjetoChallange
git checkout feat/dotnet

Execute o projeto::
dotnet run
ou pelo próprio Visual Studio 2022!

Acesse no navegador:
https://localhost:7062/
ou
https://localhost:5104/
