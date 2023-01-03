import React, { Component } from "react";

export default class Todo extends Component {
    constructor() {
        super();

        this.submitHandler = this.submitHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            item: "",
            list: [],
        };
    }

    submitHandler(e) {
        e.preventDefault();

            //Detecting the button that submitted the form and perform operation accordingly

        if (e.nativeEvent.submitter.id === "btn-search") {

            let searchItem = this.state.item;
            let regExp = new RegExp(`${searchItem}`);

            const matches = this.state.list.filter((item) => regExp.test(item));

            if (matches.length > 0) {
                this.setState({
                    list: matches,
                });

            } else {
                this.setState({
                    list: this.state.list,
                    item: "",
                });

                alert("Not Found")
            }



            //In case form submitted by button with id = "btn-add"

        } else {

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
    }

    inputHandler(e){
        this.setState({
            item: e.target.value
        })
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
                                            className="btn btn-sm btn-danger ml-3"
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
