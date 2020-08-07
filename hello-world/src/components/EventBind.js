import React, { Component } from 'react';

class EventBind extends Component {
    // clickHandler() {
    //     this.setState({
    //         message: 'Good Bye'
    //     });
    // }
    // 4th way using arrow func
    clickHandler = () => {
        this.setState({
            message: 'Good Bye'
        });
    }
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // third way & probably mostly used binding method
        // binding in the class constructor
        // this.clickHandler = this.clickHandler.bind(this);
    }
    
    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                {/* 1st way */}
                {/* <button onClick={this.clickHandler.bind(this)}> 
                    Click
                </button> */}

                {/* 2nd way, using arrow function */}
                {/* <button onClick={() => this.clickHandler()}> 
                    Click
                </button> */}
                {/* both in 3rd & 4th */}
                <button onClick={this.clickHandler}> 
                    Click
                </button>
            </div>
        )
    };
}

export default EventBind;
