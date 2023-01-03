import React, { Component } from "react";
import './ConditionalRendering.css'

export default class ConditionalRender extends Component {
    constructor() {
        super();
        this.state = {
            btnText: "Hide",
            isShow : true,
        };
    }
    render() {
        const toggleHandler = () => {

            if (this.state.btnText === "Hide") {
                this.setState({
                    btnText: "Show", 
                    isShow : false,
                });
            } else {
                this.setState({
                    btnText: "Hide",
                    isShow : true
                });
            }
        };
        return (
            <div className="container">

                {this.state.isShow && <h2>Hello To React</h2>}
                <button onClick={toggleHandler} className="toggle-btn">
                    {this.state.btnText}
                </button>

            </div>
        );
    }
}
