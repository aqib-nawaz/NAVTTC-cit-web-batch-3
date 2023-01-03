import React, { Component } from "react";
import axios from "axios";

export default class ImageSearch extends Component {
    constructor() {
        super();

        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

        this.state = {
            keyword: "",
            images: [],
        };
    }

    async submitHandler(e) {
        e.preventDefault();

        const myKey = "5akf2k2lwmIXyg1sFxkyCu880ZhEp4I0FN0eiNVWAvA";
        const keyword = this.state.keyword;

        const searchResult = await axios.get(
            `https://api.unsplash.com/search/photos?client_id=${myKey}&query=${keyword}`
        );

        this.setState({
            images: searchResult.data.results,
        });
    }

    changeHandler(e) {
        this.setState({ keyword: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-3 ml-auto mr-auto">
                        <form onSubmit={this.submitHandler}>
                            <input
                                value={this.state.keyword}
                                type="text"
                                id="search"
                                name="search"
                                className="p1-1 mr-5"
                                style={{ width: "500px", height: "40px" }}
                                onChange={this.changeHandler}
                            />
                            <button id="search-btn" type="submit" className="btn btn-success">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row" style={{ width: "800px" }}>
                    {this.state.images.map((img, i) => {
                        return (
                            <div id={i} className ="col-md-3">
                                <img
                                    id={img.id}
                                    src={img.urls.small}
                                    alt={img.alt_description}
                                    style={{ width: "500px", height: "300px" }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
