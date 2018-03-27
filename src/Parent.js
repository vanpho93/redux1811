import React, { Component } from 'react';
import { Child } from './Child';
import { connect } from 'react-redux';

class ParentComponent extends Component {
    render() {
        return (
            <div>
                <h3>Value: { this.props.count }</h3>
                <Child />
            </div>            
        );
    }
}

export const Parent = connect(state => ({ count: state.count }))(ParentComponent);
