import React, { Component } from "react";
import axios from "axios";

export default class GithubUsersTable extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }
    render() {
        const loadData = async () => {
            const res = await axios.get("https://api.github.com/users")
            const {data} =  res;
            this.setState({
                users : data
            })
        };

        return (
            <div>
                <table
                    style={{ width: "700px" }}
                    className="table table-bordered table-striped  m-auto mt-5"
                >
                    <thead className="thead-dark ">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>ProfilePic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((u, i) => {
                            return (
                                <tr key={i}>
                                    <td>{u.id}</td>
                                    <td>{u.login}</td>
                                    <td>
                                        <img
                                            style={{ width: "80px", height: "80px" }}
                                            className="img-fluid img-thumbnail rounded d-block"
                                            src={u.avatar_url}
                                            alt={u.login}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button onClick={loadData}>Click</button>
            </div>
        );
    }
}
