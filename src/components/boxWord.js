import styled, {css} from 'styled-components';
import React from 'react';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: green;
`;

const Wrapper = styled.section`
    padding: 4em;
    background-color: ${props => props.primary ? 'rgba(255,0,0,0.4)' : 'rgba(0,255,0,0.4)' } ;
    
`;

export default function() {
    return(
        <div>
        <Wrapper>
            <Title>Palavra em destaque</Title>
        </Wrapper>
        <Wrapper primary>
            <Title>Palavra em destaque</Title>
        </Wrapper>

        </div>
    )
}