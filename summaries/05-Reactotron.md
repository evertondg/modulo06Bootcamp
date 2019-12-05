# Utilizando Reactotron para debug

**Passo 1**: Entre no site https://github.com/infinitered/reactotron e instale a aplicação conforme as instruções

Após instalar adicione o pacote na sua aplicação

```js
yarn add reactotron-react-native
```

Antes de configurar o reactotron, vamos organizar nossa aplicação.Crie _**src/index.js**_ e coloque o conteúdo do arquivo App.js dentro de src/index.js.

Delete o arquivo App.js que ficará vazio da raiz do app.

no arquivo **index.js** altere a linha abaixo.

```js
import App from './App';
```

deixe esta linha da seguinte forma:

```js
import App from './src';
```

Agora dentro da pasta **src** crie uma pasta **config** e dentro de config crie um arquivo chamado ReactotronConfig.js e deixe-o com o seguinte conteúdo:

```js
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.0.0.136' }) // ip da sua maquina para emular usb
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
```

Ao adicionar esse conteúdo você verifica que a variável ** DEV ** não é entendida pelo ESlint, para corrigir isto adicione a variavel a propriedade globals como readonly, logo o .eslintrc.js fica assim:

```js
...
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
...
```

Agora é hora de importar o Reactotron dentro de nossa aplicação de fato. Na configuração dele, basicamente fizemos um comanto _console.tron_ que poderemos utilizar como _console.tron.log()_ por exemplo. Faça a importação no src/index.js :

```js
import './config/ReactotronConfig';
```

Nesse ponto ao salvar e verificar o reactotron ja teremos um log

## DICA:

Caso o reactotron nao apresente nada ao rodar o emulador android, tente utilizar o comando abaixo:

```js
adb reverse tcp:9090 tcp:9090
```

Após ter o Reactotron configurado toda vez que utilizarmos _console.tron.log()_ será printado um log na aplicação do reactotron
