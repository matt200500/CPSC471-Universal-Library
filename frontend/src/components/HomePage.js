import React, { Component } from "react";
import BookRoomPage from "./BookRoomPage";
import BrowseBooks from "./BrowseBooks";
import EventPage from "./EventPage";
import ContactPage from "./ContactPage";
import LoginPage from "./LoginPage";
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
                <a href="book">Seats/Rooms</a>
                <a href="contact">Contact</a>
                <a href="login">Login</a>
            </div>
        );
    }
    
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<this.Main/>} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/book" element={<BookRoomPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    );
  }
}