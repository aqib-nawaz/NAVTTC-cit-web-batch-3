import React, { Component } from "react";

export default class Counter extends Component{

    constructor(){
        super();
        this.state ={
            counter: 0
        }

    }
    render(){

        const incrementHandler = () => {
            let value = this.state.counter + 1;
            this.setState({
                counter : value
            })
        }
        const decHandler = () => {

            let value = this.state.counter - 1 ;
            this.setState({
                counter:  value
            })
        }
        const resetHandler = () => {
            this.setState({
                counter : 0
            })
        }
        return (
            <div>
                <h3>{this.state.counter}</h3>
                <button onClick={incrementHandler}> Increment</button>
                <button onClick={decHandler}>Decrement</button>
                <button onClick ={resetHandler}> Reset</button>
            </div>
        )
    }
}

