# Adicionando StyleComponents

Inicialmente vamos adicionar a biblioteca a nosso projeto

```js
yarn add styled-components
```

Após a instalação, crie o arquivo style.js dentro das pastas Main e User
Abra o arquivo Main/style.js e deixe com o seguinte conteúdo.

```js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #eee;
`;
```

E altere seu Main/index.js para:

```js
import React from 'react';
import { Container } from './styles';

export default function Main() {
  return <Container />;
}

Main.navigationOptions = {
  title: 'Home',
};
```

Uma das diferenças do styledComponent do ReactNative para o ReactJS é que não vamos conseguir utilizar a sintaxe de encadeamento de tags. Todo componente que precisar ser estilizado precisa ser criado um novo styledComponent.

Outro funcionamento que não temos é o styleGlobal, podemos criar componentes compartilhados.
