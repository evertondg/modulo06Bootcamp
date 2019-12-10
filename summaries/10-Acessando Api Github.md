# Acessando API Github

O que vamos fazer é com que o usuário adicione o nome do usuario do github no campo que criamos e ao clicar no botão + ele faça a busca na api e adicione no state do app.

Como vamos utilizar o state, precisamos alterar a declaração do componente funcional para que ele utilize classe. Sendo assim nosso **Main/index.js** fica assim.

```js
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = () => {
    console.tron.log(this.state.newUser);
  };

  render() {
    const { users, newUser } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send" // faz com que o botao retornar se comporte como um submit
            onSubmitEditing={this.handleAddUser} //chama o metodo handleAddUser
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Home',
};
```

Como próximo passo vamos adicionar o Axios, para fazer a chamada a API:

```js
yarn add axios
```

Crie uma pasta e um arquivo chamados **services/api.js** e adicione o seguinte conteúdo:

```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
```

Agora precisamos importar isto para nosso index.js

```js
import api from '../../services/api';
```

Agora vamos incrementar nosso método handleAddUser :

```js
handleAddUser = async () => {
  const { users, newUser } = this.state;

  const response = await api.get(`/users/${newUser}`);

  const data = {
    name: response.data.name,
    login: response.data.login,
    bio: response.data.bio,
    avatar: response.data.avatar_url,
  };

  this.setState({
    users: [...users, data],
    newUser: '',
  });

  Keyboard.dismiss();
};
```

Repare na última linha do metodo handleAddUser onde chamamos _Keyboard.dismiss()_ Esta linha faz com que ao disparar o método onPress (Ou apertar o botao return no teclado já que configuramos isto). Para que isto funcione, não se esqueça de importar no inicio do arquivo:

```js
import { Keyboard } from 'react-native';
```
