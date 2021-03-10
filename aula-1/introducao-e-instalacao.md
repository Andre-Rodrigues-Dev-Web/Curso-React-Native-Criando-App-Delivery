## Introdução

    React Native é um framework no ecossistema da biblioteca React que permite o desenvolvimento de aplicações mobile. Diferente do DOM Web, suas tags são voltadas para o mobile, podemos ter em nosso documento tags componentes como: 

    View: Tag container com mesmo objetivo das divs; 
    Text: Tag voltada para textos podendo ser usada como paragrafo, ou título.
    Image: Tag usada para imagens;
    TextInput: Tag de campos de entrada, ela possuí o mesmo objetivo das tags input do DOM web.

    Caso queira ver as demais tags, acesse o link: https://reactnative.dev/docs/textinput, e confira todas as tags componentes disponíveis na documentação. 

## Instalação:
    Poderiamos usar o React Native direto, mas devido ao seu tempo de instalação e build serem demorados, iremos adotar uma ferramenta chamada Expo, elas nos permite de forma rápida e fácil desenvolver nossos apps, e indo até além que o React Native puro, ela nos dá a opção de buildarmos em nosso navegador o nosso app, não restrigindo apenas em celulares fisícos, ou, emuladores como Android Studio e os emuladores de IOS do XCode (presentes em sistema Mac-OS).

### Configurando o Expo
    Para instalarmos o Expo, precisamos entrar em nosso terminal em modo permissão administrativa, dessa maneira conseguimos instalar os pacotes de forma global sem erros de permissão. O comando para o setup é : npm install --global expo-cli , após sua instalação, você pode criar um app com o seguinte comando: expo init meu-app. Feito os passos anteriores, você pode abrir a pasta de seu projeto no terminal (Importante colocar o projeto em um lugar fácil de achar), ao abrir a pasta do projeto no terminal, digite o comando: expo start, ele irá abrir uma janela no seu navegador com as opções de build nos emuladores web, IOS e Android.  

