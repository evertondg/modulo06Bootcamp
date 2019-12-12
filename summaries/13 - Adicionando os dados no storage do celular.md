# Salvando os dados localmente no dispositivo

O ReactNative não consegue salvar por si só no localStorage como o ReactJS. Para poder salvar os dados importados da api em nosso storage, vamos fazer o seguinte:

Primeiramente vamos adicionar a biblioteca async-storage

```js
yarn add @react-native-community/async-storage
```

Após a instalação é necessário rodar o _*react-native run android*_ novamente.

O _AsyncStorage_ funciona como se fosse o LocalStorage do navegador, porém ao utilizar ele é necessário utilizar o _await_, já que ele funciona de modo assincrono.

vamos utilizar o _AsyncStorage_ para gravar e ler nosso Storage, logo como no ReactJS, o React Native tem os métodos:

```js
  // nos parametros temos as props antes do componente ser montado e o estado da aplicação antes do componente ser montado
  async componentDidMount(){}

  // nos parametros temos as props antes da atualização e o estado da aplicaão antes da atualizacao
  async componentDidUpdate(_,prevState){}
```

Então toda vez que atualizar algo vamos setar nosso estado no update e toda vez que listar algo vamos buscar no momento que o componente é "montado" ( Capisco?!?).
