import React from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
 /* meus estilos */
`;

const CurrentResult = styled.p`
    /*...*/
    padding: 5em 0;
`;

const Button = styled.button`
    /* .... */
    border: 1px solid black;
    padding: 2em 5em;
    margin:  0 1em;
    font-size: 2em;
`;

export default class Counter extends React.Component {
    state = {count: 0};

    increment = () => {
        this.setState({count: this.state.count + 1});
    }
    decrement = () => {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <StyledCounter>
                <CurrentResult>{this.state.count}</CurrentResult>
                <Button onClick={this.increment}>+</Button>
                <Button onClick={this.decrement}>-</Button>
            </StyledCounter>
        )
    }
}