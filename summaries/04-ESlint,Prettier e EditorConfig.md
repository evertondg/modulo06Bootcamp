# Configurando o ESlint, Prettier e EditorConfig

Clique com o botão direito na árvore de diretórios do projeto e clique em Generate .editorconfig

Configure o arquivo da seguinte forma

```js
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## ESlint

O Próximo passo é configurar o ESlint. Antes, verifique se o arquivo **.eslintrc.js** existe e apague este arquivo. Então, vamos adicionar o Eslint como uma dependencia de desenvolvimento:

```js
yarn add eslint -D
```

Após a instalação digite o comando abaixo para iniciar a configuração:

```js
yarn eslint --init
```

Entao escolha as opções:

- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- React
- Does your project use TypeScript? (y/N) N
- Where does your code run? (Desmarque estas opções pois nao vamos rodar nem no Browser nem no node.)
- Use a popular style guide
- Airbnb: https://github.com/airbnb/javascript
- JavaScript
  Próximas opções aceitamos com o Y

Após terminar delete o arquivo _package.lock.json_ e rode o comando yarn para as dependencias serem instaladas via yarn e nao npm (que é o padrao)

Agora abra o arquivo .eslintrc.js

Antes de começar configurar vamos instalar alguns plugins como dependencia de desenvolvimento.

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

deixe seu arquivo **.eslintrc.js** da seguinte forma:

```js
module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
```

Como próximo passo vamos criar um arquivo **.prettierrc** e vamos deixar o conteúdo da seguinte forma

```js
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

dessa forma o prettier irá sempre colocar virgula no final dos objetos que criarmos e sempre colocar aspas simples no lugar de aspas duplas.

Podemos alterar nosso arquivo **App.js** exportando como uma função pois nosso eslint irá acusar erro ao utilizar o modo de classe pois não existe estado da aplicação. Fica assim:

```js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(113, 89, 193);',
    margin: 0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 3,
    color: '#FFF',
  },
});
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Everton</Text>
        <Text style={styles.welcome}>De Grande | Cindy</Text>
      </View>
    </>
  );
}
```

# Dica

Muitos problemas que ocorrem no device quando estamos desenvolvendo é resolvido com :

```js
react-native start --reset-cache
```

ou

```js
react-native run-android
```

Vale lembrar que durante os estudos tive problema e resolvi rodando primeiro o start para executar o metroBlunder depois rodando o run-android. Fazendo isso rodou certinho ;D
