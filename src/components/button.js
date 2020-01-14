import styled, {css} from 'styled-components';
import React from 'react';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid green;
    color: green;
    margin: 0 1em;
    padding: 0.25em 1em;
    
    ${props => props.primary && css`
        background: green;
        color: white;
    `}

`;

const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const Container = styled.div`
    text-align: center
`

function MeuBotao() {

    return (
        <Container>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
            <TomatoButton>Tomato Button</TomatoButton>
        </Container>
    )
}

export default MeuBotao;