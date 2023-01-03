import React, { Component } from 'react'
import Button from './Button'
export default class Number extends Component {
    constructor(){
        super()
        this.state = {
            num : 0
        }
    }
    render() {
        const countHandler = () => {
            this.setState({
                num : this.state.num + 1
            })
        }
        return (
            <div>
                <h2>{this.state.num}</h2>
                <Button numCount = {countHandler}/>
            </div>
        )
    }
}
