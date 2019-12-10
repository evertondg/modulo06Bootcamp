# Criando um formulário personalizado

Instale o pacote de fontes/icones:

```js
yarn add react-native-vector-icons
```

Siga atentamente os procedimentos indicados na documentação do pacote para que não tenha problemas em utilizar os componentes que são fornecidos.

Siga as instruções [aqui](https://github.com/oblador/react-native-vector-icons#android). após fazer as configurações.

deixe o arquivo **Main/index.js**

```js
import React from 'react'; // se atente aqui nao usamos {}
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#fff" />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Home',
};
```

deixe o arquivo **Main/styles.js**

```js
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  background-color: #715991;
`;
```
