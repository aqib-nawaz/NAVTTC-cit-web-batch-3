import React, { Component } from "react";

export default class Todo extends Component {
    constructor() {
        super();

        this.submitHandler = this.submitHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            item: "",
            list: ["abc", "apple", "cat", "xyz", "pqr", "abcdef"],
        };
    }

    submitHandler(e) {
        e.preventDefault();

        if (this.state.value === "") {
            alert("Invalid Input (Empty)");


        } else if (this.state.list.indexOf(this.state.item) === -1) {
            this.setState({
                list: this.state.list.concat(this.state.item),
            });


        } else {
            alert("Item already found");
        }

        this.setState({ item: "" });
    }


    inputHandler(e){

        let searchItem = e.target.value;
        let regExp = new RegExp(`${searchItem}`);

        const matches = this.state.list.filter((item) => regExp.test(item));

        if(matches.length > 0){
            this.setState({
                item: e.target.value,
                list:matches
            })
        }
    }

    deleteItem(item){

        let newList = this.state.list.filter((i) => i !== item);
        this.setState({
            list:newList
        })
    }
    render() {
        return (
            <div>
                <h2>TODO-List</h2>
                <div className="form-container">
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            id="input"
                            value={this.state.item}
                            onChange={this.inputHandler}
                        />

                        <button
                            type="submit"
                            id="btn-add"
                            className="btn btn-success ml-3"
                            value="Add"
                        >
                            Add
                        </button>
                        <button
                            type="submit"
                            id="btn-search"
                            className="btn btn-success ml-3"
                            value="Search"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="item-container">
                    <ul>
                        {this.state.list.length > 0 &&
                            this.state.list.map((item, i) => {
                                return (
                                    <li key={i}>
                                        {item}
                                        <button
                                            className="btn btn-sm btn-danger mt-3 ml-3"
                                            onClick={(e) => this.deleteItem(item)}
                                        >
                                            Del
                                        </button>
                                    </li>
                                );
                            })}
                        {this.state.list.length === 0 && <li>List Item is empty</li>}
                    </ul>
                </div>
            </div>
        );
    }
}
