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