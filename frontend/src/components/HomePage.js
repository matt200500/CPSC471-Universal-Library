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
import SignupPage from "./SignupPage";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

  }
    Main(){
        return(
            <><div class="navigation">
            <a href="">Home</a>
            <a href="browse">Browse Books</a>
            <a href="events">Events/Programs</a>
            <a href="bookseats">Seats</a>
            <a href="bookrooms">Private Rooms</a>
            <a href="contact">Contact</a>
            <a href="login">Login</a>
            <a href="account">Account</a>
          </div><div class="home-stuff">
              <h1>Welcome To The Universal Library!</h1>
              <h2>Explore boundless worlds within our vast collection of books, where knowledge knows no bounds!! With a diverse array of genres and subjects, there's something for every curious mind.</h2>
              <h3>
                Need a quiet space to dive into a good book or study? Our comfortable seating areas and study rooms provide the perfect sanctuary for focused learning and contemplation.
              </h3>
              <h3>
                Join us for engaging events and workshops that cater to all ages and interests. From author signings to book clubs, there's always something exciting happening at The Universal Library.
              </h3>
              <h3>
                Looking for a space to host your own event or meeting? Our versatile rooms are available for booking, whether you're organizing a study group or a community gathering.
              </h3>
              <h3>
                Embark on a journey of discovery and imagination at The Universal Library, where every page holds the promise of new adventures and insights. Welcome to your literary haven.
              </h3>
          </div></>
        );
    }

  render() {
    return (
      <><Router>
        <Routes>
          <Route path="" element={<this.Main />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/bookrooms" element={<BookRoomPage />} />
          <Route path="/bookseats" element={<SeatPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Router>
      </>
    );
  }
}