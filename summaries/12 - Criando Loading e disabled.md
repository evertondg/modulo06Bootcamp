# Criando loading e deixando botão disabled

Importe do react native o ActivityIndicator :

```js
import { Keyboard, ActivityIndicator } from 'react-native';
```

Agora temos de criar uma variavel _loading_ no estado da aplicação.
Por default o valor dela será **false**, antes de chamar a api deixamos **true** e
após setar o estado novamente com o retorno da api
No botão fazemos um if ternário e caso o loading seja true mostramos o componente _ActivityIndicator_ senão mostramos nosso ícone!

O código do Main/index.js fica assim:

```js
import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    this.setState({
      loading: true,
    });
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
      loading: false,
    });

    Keyboard.dismiss();
  };

  render() {
    const { users, newUser, loading } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Home',
};
```

Como no ReactNative não conseguimos fazer o encadeamento de estilos,
vamos trabalhar a propriedade de opacidade no estilo do botão verificando a propriedade loading.
o estilo do botão fica assim :

```js
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  background-color: #715991;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;
```

Só testar! #boraCodar!!!
