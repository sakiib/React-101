import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        // destructuring in render method
        const { name, heroName } = this.props;
        // state in similar way
        // const { state1, state2 } = this.state; 
        return <h1> Hello {name} aka {heroName} </h1>
    }
}

export default Welcome;