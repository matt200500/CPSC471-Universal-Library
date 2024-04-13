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
    const response = await fetch(`account/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'userId': userId
      },
    });
    if (response.ok) {
      const data = await response.json();
      this.setState({
        user: data,
      });
    } else {
      console.error("Failed to fetch data");
    }
  }

  fetchBookRentData = async (e) => {
    e.preventDefault();
    const { user, book, lending_time } = this.state.searchCriteria;
    const response = await fetch(`/api/bookrent-data?user=${user_id}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ books: data });
    } else {
      alert("Failed to fetch bookrent data");
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
        <div>
        <h1>Account Information</h1>
        {user ? (
          <div>
            <p>ID: {user.user_id}</p>
            <p>Email: {user.email}</p>
            <div>
              <h2>Your Book Rentals</h2>
              {this.state.books.map(bookrent => 
                <tr key={book.book}>
                  <td>{book.book}</td>
                  <td>{book.lending_time}</td>
                </tr>)}
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