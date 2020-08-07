import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count: 0
        }
    }
    increment() {
        // its async, so down there is executed before increment
        // if we want if after, make the callback function
        // this.setState({
        //     count: this.state.count + 1,
        // }, () => {
        //     console.log('inside setState ', this.state.count);
        // });
        // console.log('down there ', this.state.count);

        // this is based on previous state, check the commented code output
        this.setState((prevState, props) => ({
            count: prevState.count + 1,
        }));
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                Count - { this.state.count }
                <button onClick={ () => this.incrementFive() }> 
                    Increment
                </button>
            </div>
        );
    }
}

export default Counter;
