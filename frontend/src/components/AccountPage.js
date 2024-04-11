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
  constructor(props) {
    super(props);
  }

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
        <div className="stuff">
          <h1>This is the account page</h1>
        </div>
      </>
    );
  }
}

export default AccountPage