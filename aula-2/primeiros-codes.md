    Na aula de hoje iremos códificar nossa aplicação e customizar nossos primeiros componentes usando o Styled Components. 

## Introdução ao Styled Components

    O Styled Components é uma biblioteca que permite customizar visualmente componentes, restringindo suas caracteristicas. Para usar a biblioteca no React Native, primeiro precisamos instalar a mesma em nosso projeto, abaixo os passos para instalarmos o Styled Components.

    - Abra sua pasta do projeto no terminal;
    - Digite o seguinte comando: npm install --save styled-components;
    - Após instalada pelo npm, instale no yarn com o comando: yarn install.

    Agora que instalamos a lib, podemos então criar nosso componente. Vamos iniciar criando um diretório de nome Components, logo após criamos um outro diretório dentro de Components com nome de Sections, e por fim criamos um arquivo com nome de style.js. Vamos então agora ver a forma de escrita de um Componente usando Styled Components, veja abaixo:

    import style from 'style-components/native' //aqui importamos a lib com recursos nativos

    const Template = style.view`
        background-color: #333;
        height: 900px;
        width: 100%;
    `; // estilo do componente

    export{
        Template
    } //exportamos aqui nosso componente

    Uso do nosso componente: 

    import React from 'react';
    import {
    Template
    } from './Componentes/Sections/style'

    const App = () => {
        return (
            <Template/>
        );
    }

    export default  App;
    
## Criando outros componentes

    Agora que sabemos criar nossos componentes com a lib Styled Components, podemos ir além criando outros, por exemplo: um componente chamado Content no nosso arquivo style.js, o código irá ficar assim:

    import style from 'styled-components/native'

    const Template = style.View`
        background-color: #eee;
        height: 900px; 
        width: 100%;
    `;
    const Content = style.View`
        margin: 0 auto;
        width: 99%;
    `;
    export{
        Content,
        Template
    }

    Agora criamos um novo diretório de nome Grids, nele criamos um arquivo de nome style.js e colocamos o seguinte código:

    import style from 'styled-components/native'

    const Container = style.View`
        margin: 0 auto;
        width: 99%;
    `;
    const RowLine = style.View`
        display: flex;
        flex-direction: row;
    `;
    const RowColumn = style.View`
        display: flex;
        flex-direction: column;
    `;
    const Col1 = style.View`
        width: 100%;
    `;
    export{
        Container,
        RowColumn,
        RowLine,
        Col1
    }

    Você pode perceber que criamos um col, mas ficar criando diversas cols uma por uma é algo sem nexo, na próxima aula iremos ver como fazer loops em componentes e usar props. Por hoje é só pessoal, até a próxima aula.