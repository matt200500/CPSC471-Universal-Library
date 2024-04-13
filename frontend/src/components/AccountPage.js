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
    user: null,
    books: [],
    seats: [],
    rooms: [],
    events: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData = async () => {
    const userId = JSON.parse(localStorage.getItem('user')).user_id;
    const response = await fetch(`/account/${userId}/`);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        user: data,
        books: data.books,
        seats: data.seats,
        rooms: data.rooms,
        events: data.events
      });
    } else {
      console.error("Failed to fetch data");
    }
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
        <div>
        <h1>Account Information</h1>
        {user ? (
          <div>
            <p>ID: {user.user_id}</p>
            <p>Email: {user.email}</p>
            <div>
              <h2>Your Book Rentals</h2>
              {books.length > 0 ? books.map((book, index) => (
                <div key={`book-${index}`}>
                  <p>Book ID: {book.book}</p>
                  <p>Due Date: {book.lending_time}</p>
                </div>
              )) : <p>No books rented.</p>}
            </div>
            <div>
              <h2>Your Seat Bookings</h2>
              {seats.length > 0 ? seats.map((seat, index) => (
                <div key={`seat-${index}`}>
                  <p>Seat: {seat.seat_num}</p>
                  <p>Time: {seat.time}</p>
                </div>
              )) : <p>No seats booked.</p>}
            </div>
            <div>
              <h2>Your Room Bookings</h2>
              {rooms.length > 0 ? rooms.map((room, index) => (
                <div key={`room-${index}`}>
                  <p>Room: {room.room}</p>
                  <p>Floor: {room.floor_no}</p>
                  <p>Time: {room.time}</p>
                </div>
              )) : <p>No rooms booked.</p>}
            </div>
            <div>
              <h2>Your Event Applications</h2>
              {events.length > 0 ? events.map((event, index) => (
                <div key={`event-${index}`}>
                  <p>Event: {event.event}</p>
                </div>
              )) : <p>No events applied for.</p>}
            </div>
          </div>
        ) : (
          <p>Loading or no user data available.</p>
        )}
      </div>
      </>
    );
  }
}

export default AccountPage
