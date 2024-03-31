import React, { Component } from "react";
import BookRoomPage from "./BookRoomPage";
import BrowseBooks from "./BrowseBooks";
import EventPage from "./EventPage";
import ContactPage from "./ContactPage";
import LoginPage from "./LoginPage";
import AccountPage from "./AccountPage";
import SeatPage from "./BookSeatPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Backdrop } from "@material-ui/core";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

  }
    Main(){
        return(
            <div class="navigation">
                <a href="">Home</a>
                <a href="browse">Browse Books</a>
                <a href="events">Events/Programs</a>
                <a href="bookseats">Seats</a>
                <a href="bookrooms">Private Rooms</a>
                <a href="contact">Contact</a>
                <a href="login">Login</a>
                <a href="account">Account</a>
            </div>
        );
    }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<this.Main/>} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/bookrooms" element={<BookRoomPage />} />
          <Route path="/bookseats" element={<SeatPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Router>
    );
  }
}