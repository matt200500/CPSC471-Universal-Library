import React, { Component } from "react";
import BookRoomPage from "./BookRoomPage";
import BrowseBooks from "./BrowseBooks";
import EventPage from "./EventPage";
import LoginPage from "./LoginPage";
import AccountPage from "./AccountPage";
import HomePage from "./HomePage";
import SeatPage from "./BookSeatPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class ContactPage extends Component {
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
        <div class="home-stuff">
              <h2>You can contact us at our email address UniversalLibrary@gmail.com or you can call us at 123-456-7890.</h2>
              <h3>
                Our phone hours are from 8:00am - 5:00pm MST
              </h3>
          </div>
      </>
    );
  }
}

export default ContactPage