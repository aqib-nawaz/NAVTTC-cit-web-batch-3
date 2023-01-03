import { Component } from 'react'

export default class Button extends Component {
    render() {
        const stateHandler = () => {
            this.props.numCount()
        }
        return (
            <button onClick={stateHandler}>Click</button>
        )
    }
}
