import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChildComponent extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase</button>
                <button onClick={() => dispatch({ type: 'DESCREASE' })}>Descrease</button>
                <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            </div>            
        );
    }
}

export const Child = connect()(ChildComponent);
