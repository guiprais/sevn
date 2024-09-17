# Sevn Esportes

## Descrição

Sevn Esportes é um projeto fictício que simula um campeonato de futebol, permitindo aos usuários conferir as rodadas de jogos.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório:

    ```bash
    git clone git@github.com:guiprais/sevn.git
    cd sevn
    ```

2. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn
    ```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e defina a variável `VITE_API_URL`:

```env
VITE_API_URL=https://seu-endpoint-api.com
```

OBS: Para fins de facilitar a execução do projeto, a variável `VITE_API_URL` já existe e está apontando para o endereço correto.

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
ou
yarn dev
```

O projeto estará disponível em `http://localhost:5173` por padrão.

## Build

Para construir o projeto para produção:

```bash
npm run build
ou
yarn build
```

Os arquivos de produção serão gerados na pasta `dist`.

## Preview

Para pré-visualizar a build de produção:

```bash
npm run preview
ou
yarn preview
```

## Estrutura do Projeto

- `index.html`: Página principal.
- `src/`: Código fonte do projeto.
  - `main.ts`: Ponto de entrada da aplicação.
  - `style.css`: Estilos globais.
  - `lib/`: Configurações de bibliotecas, como Axios.
  - `types/`: Definições de tipos TypeScript.
  - `api/`: Endpoints da API.
- `public/`: Arquivos estáticos.
- `package.json`: Configurações e scripts do projeto.
- `tsconfig.json`: Configurações do TypeScript.
- `.gitignore`: Arquivos e diretórios a serem ignorados pelo Git.

## Scripts Disponíveis

- `npm run dev` ou `yarn dev`: Inicia o servidor de desenvolvimento.
- `npm run build` ou `yarn build`: Compila o projeto para produção.
- `npm run preview` ou `yarn preview`: Visualiza a build de produção.

## Tecnologias Utilizadas

- **Vite**: Bundler rápido para desenvolvimento.
- **TypeScript**: Superset de JavaScript com tipagem estática.
- **Axios**: Cliente HTTP para requisições API.
- **Zod**: Validação de esquemas.
- **CSS**: Estilização da aplicação.

---
