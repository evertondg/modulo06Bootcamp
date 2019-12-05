# React Navigation

Vamos criar a parte de roteamento de nossa aplicação

No arquivo **src/index.js** deixe ele em branco apenas com uma view, conforme o código abaixo:

```js
import React from 'react';
import { View } from 'react-native';

import './config/ReactotronConfig';

export default function App() {
  return (
    <>
      <View />
    </>
  );
}
```

Neste momento caso esteja emulando, você vai enxergar apenas uma View em branco sem texto algum no seu dispositivo.

Para manter organizado nosso projeto, crie a seguinte estrutura dentro da pasta **src** :

- src
  - pages
    - Main
      - index.js
    - User
      - index.js
  - config
  - index.js
  - routes.js

Dentro do arquivo pages/Main/index.js, crie o seguinte código:

```js
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function Main() {
  return <View />;
}
```

Dentro do arquivo pages/User/index.js, crie o seguinte código:

```js
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function User() {
  return <View />;
}
```

Basicamente estamos exportando dois componentes funcionais

Vá até o arquivo **routes.js**
Antes de configurar os arquivos de rotas de nossa aplicação, vamos instalar a dependencia responsável por isto.

```
yarn add react-navigation
```

Como proximo passo procurando na documentação do [react-navigation](https://reactnavigation.org/docs/en/getting-started.html) encontramos que em um projeto que não utiliza o expo (que é o nosso caso) devemos fazer a seguinte instalação

> Installing dependencies into a bare React Native project
> In your project directory, run:

```
 yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23
```

e mais este passo

React Native 0.60 and higher
On newer versions of React Native, linking is automatic.

To finalize installation of react-native-screens for Android, add the following two lines to dependencies section in android/app/build.gradle:

```gradle
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'

implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

Vamos fazer um exemplo de navegação por pilhas entao adicione o seguinte pacote:

```terminal
yarn add react-navigation-stack
```

e deixe o arquivo routes.js com o seguinte conteúdo (para tirar dúvidas recorra sempre a [react-navigation](https://reactnavigation.org/docs/en/hello-react-navigation.html) )

```js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main/index';
import User from './pages/User/index';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default Routes;
```

Como estamos exportando a const Routes, devemos importa-la em nosso arquivo principal. Então vamos deixar o arquivo index.js assim:

```js
import React from 'react';

import './config/ReactotronConfig';
import Routes from './routes';

console.tron.log('teste');
export default function App() {
  return <Routes />;
}
```

Ao final dos componentes funcionais Main e Users adicione as configuraçoes ao final de seus respectivos arquivos:

- Main

```js

...
Main.navigationOptions = {
  title: 'Home',
};
```

- User

```js

...
User.navigationOptions = {
  title: 'Home',
};
```

para customizar a barra do topo da aplicação podemos deixar nosso arquivo routes.js assim:

```js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main/index';
import User from './pages/User/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
```
