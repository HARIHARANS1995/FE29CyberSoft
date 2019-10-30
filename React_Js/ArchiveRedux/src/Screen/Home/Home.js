import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
          >
            Add User
          </button>
        </div>
        <Users />
        <Modal />
      </div>
    );
  }
}

export default Home;