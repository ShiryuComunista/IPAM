# ItemManagerApp

Bem-vindo ao **ItemManagerApp**, um aplicativo React Native desenvolvido com o Expo para o processo seletivo do IPAM.
Cujo o objetivo é desenvolver um aplicativo simples para gerenciar uma lista de itens, utilizando Redux para gerenciamento
de estado e Local Storage para persistir os dados.

---

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão recomendada: >= 14.x)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (instalável via npm: `npm install -g expo-cli`)
- [Android Studio](https://developer.android.com/studio) (opcional, para testes locais em Android)
- [Xcode](https://developer.apple.com/xcode/) (necessário para rodar em dispositivos iOS - apenas em macOS)
- Um dispositivo físico ou emulador (Android/iOS)
- Expo Go App (disponível para [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) e [iOS](https://apps.apple.com/app/expo-go/id982107779))

---

## Passos para rodar o projeto

### 1 - Clonar o repositório
Clone o projeto em sua máquina local:

```bash
git clone https://github.com/ShiryuComunista/IPAM.git
cd IPAM
```

### 2 - Instalar dependências
Instale as dependências do projeto:

```bash
npm install
```

### 3 - Executar o aplicativo com Expo Go
Para rodar o projeto no Expo Go:

```bash
npm run start
```

---

## Tecnologias utilizadas

- React Native: Biblioteca principal para o desenvolvimento.
- Expo: Framework para simplificar o desenvolvimento e execução de projetos React Native.
- Redux: Gerenciamento de estado centralizado.
- TypeScript: Linguagem para adicionar tipos estáticos ao JavaScript.
  
---

## Decisões de Organização do Código

### Estrutura de pastas:
O projeto está organizado em três principais diretórios:
- components: contém os componentes reutilizáveis da interface do usuário.
- redux: gerencia o estado global do aplicativo, com separação clara entre actions, reducers e store.
- styles: contém arquivos para centralizar a estilização e facilitar a consistência visual.

### Persistência de Dados:
- Utilize o AsyncStorage para persistir os dados localmente.
- A integração foi realizada dentro do Redux, garantindo que os dados sejam sincronizados automaticamente ao iniciar o aplicativo.

### Estilo:
- A estilização segue uma abordagem simples, utilizando uma combinação de estilos inline e centralizados na pasta styles.

Espero que a estrutura e a funcionalidade estejam alinhadas com as expectativas e sejam fáceis de compreender e expandir, caso necessário.
