# Mottu Pátio App

O **Mottu Pátio App** é uma aplicação mobile (APK) destinada a organizar o pátio de motos, facilitando as rotinas de verificação dos fiscais de campo/pátio, auxiliando no cadastro e histórico de motos. Através desse app, fiscais de campo podem realizar rotinas de verificação e atualização de dados das motos no pátio. O aplicativo também permite que os usuários gerenciem suas preferências.


## Estrutura inicial do app criada com:

- Navegação entre 5 telas com React Navigation

- Protótipos funcionais com dados mockados

- Formulário com useState

- Salvamento e leitura com AsyncStorage

### O que foi adicionado:
- Estilização com Tailwind via nativewind

- Botões com ícones

- Validações básicas no formulário


## Telas

1. **Home**: Tela inicial com botões para navegar para as outras funcionalidades do app.
2. **Verificação**: Tela para verificar as motos presentes no pátio.
3. **Cadastro de Moto**: Formulário para cadastrar novas motos, com campos para placa e modelo.
4. **Histórico**: Tela que exibe o histórico de verificações realizadas.
5. **Preferências**: Tela para gerenciar as preferências do usuário, como o nome do fiscal, armazenado no `AsyncStorage`.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de apps móveis.
- **Expo**: Ferramenta para facilitar o desenvolvimento com React Native.
- **React Navigation**: Biblioteca para navegação entre telas.
- **AsyncStorage**: Para persistir dados no dispositivo local.
- **React Native Gesture Handler e Reanimated**: Para gestos e animações.



### Configurando projeto
- git clone ...
- cd mottu-patio-app
- npm install
