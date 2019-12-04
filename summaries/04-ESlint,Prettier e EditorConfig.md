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
