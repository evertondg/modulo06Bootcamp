# Configurando a Status bar do aplicativo

No arquivo index.js importe o statusbar e adicione no return com as configurações indicadas

```js
import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

console.tron.log('teste');
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
```

Por padrão no android a Status bar recebe a cor cinza.
