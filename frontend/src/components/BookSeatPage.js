import React, { Component } from "react";
import BookRoomPage from "./BookRoomPage";
import BrowseBooks from "./BrowseBooks";
import EventPage from "./EventPage";
import ContactPage from "./ContactPage";
import LoginPage from "./LoginPage";
import AccountPage from "./AccountPage";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class SeatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: [],
      searchCriteria: ""
    };
  }
  

  Main(){
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
        <div className="stuff">
          <h1>This is the seat page</h1>
        </div>
      </>
    );
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="Seat Number"
          onChange={this.handleInputChange}
          value={this.state.userId}
        />
        <input
          type="text"
          name="floorno"
          placeholder="Floor Number"
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <button type="submit">Search For Seats</button>
      </form>
      
      
      </>
    );
  }
}

export default SeatPage