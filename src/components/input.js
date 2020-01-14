import styled, { css } from 'styled-components';
import React from 'react';

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || 'pink'};
    background: papayawhip;
    border-radius: 3px;
`;


export default function () {
    return (
        <div>
            <Input defaultValue="@henrique" type="text" />
            <Input defaultValue="@ramalho" type="text" inputColor="orange" />
        </div>
    )
}
