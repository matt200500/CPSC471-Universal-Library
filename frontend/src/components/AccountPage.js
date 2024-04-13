import React, { Component } from "react";
import BookRoomPage from "./BookRoomPage";
import BrowseBooks from "./BrowseBooks";
import EventPage from "./EventPage";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import SeatPage from "./BookSeatPage";
import ContactPage from "./ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class AccountPage extends Component {
  state = {
    user_edit: {
      user_id: "",
      email: "",
      firstname: "",
      middlename: "",
      lastname: "",
      User_password: "",
    },
    books: [],
    seats: [],
    rooms: [],
    events: [],
    user_Data: [],
  };


  constructor(props) {
    super(props);
  }


    // -------------------------------- FOR EDITING USER ------------------------------

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user_edit: {
        ...this.state.user_edit,
        [name]: value
      }
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const user_id1 = localStorage.getItem('user_id');
    if (user_id == null) {
      alert('User has not logged in');
      return;
    }

    this.setState({
      user_edit: {
        ...this.state.user_edit,
        user_id: user_id1
      }
    });

    const { user_id, email, User_password, firstname, middlename, lastname } = this.state.user_edit;
    const response = await fetch(`/api/edit-user?user_id=${user_id}&email=${email}&User_password=${User_password}&firstname=${firstname}&middlename=${middlename}&lastname=${lastname}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ randomData: data });
      alert("Successfully changed account data");
    } else {
      alert("Failed to change data");
    }
  };

// --------------------------------------- FOR VIEWING USER ---------------------------------

  handleView = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem('user_id');
    if (user_id == null) {
      alert('User has not logged in');
      return;
    }

    const response = await fetch(`/api/account?user_id=${user_id}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({user_Data: data });
      alert("Successfully viewed account data");
    } else {
      alert("Failed to view account data");
    }
  };

  render() {
    return (
      <>
      <div className="navigation">
          <a href="/">Home</a>
          <a href="browse">Browse Books</a>
          <a href="events">Events/Programs</a>
          <a href="bookseats">Seats</a>
          <a href="bookrooms">Private Rooms</a>
          <a href="contact">Contact</a>
          <a href="login">Login</a>
          <a href="account">Account</a>
        </div>
      <div className="login-stuff">
        <h1>Account Information</h1>
        <h2></h2>
        <p>Update User Data Below</p>
        <h2></h2>
        <p>Enter into the field the data you want to change</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.user_edit.email}
          />
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={this.handleInputChange}
            value={this.state.user_edit.firstname}
          />
          <input
            type="text"
            name="middlename"
            placeholder="Middle Name"
            onChange={this.handleInputChange}
            value={this.state.user_edit.middlename}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={this.handleInputChange}
            value={this.state.user_edit.lastname}
          />
          <input
            type="password"
            name="User_password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.user_edit.User_password}
          />
          <button type="submit">Edit</button>
        </form>
        <h4></h4>
        <form onSubmit={this.handleView}>
        <button type="submit">View Account Data</button>
        </form>
        <h4></h4>
        <div className="table_container">
        <table border='1'>
          <tr>
            <th>Account ID</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>password</th>
          </tr>
          {this.state.user_Data.map(user => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.email}</td>
              <td>{user.firstname}</td>
              <td>{user.middlename}</td>
              <td>{user.lastname}</td>
              <td>{user.User_password}</td>
            </tr>
          ))}
        </table>
      </div>
      </div>
      </>
    );
  }
}

export default AccountPage
