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
    
    state = {
        user_edit: {
          user_id: "",
          email: "",
          firstname: "",
          middlename: "",
          lastname: "",
          User_password: "",
        },
        user: null,
        books: [],
        seats: [],
        rooms: [],
        events: []
    };

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
            books: data.books,
            seats: data.seats,
            rooms: data.rooms,
            events: data.events
        });
        } else {
        console.error("Failed to fetch data");
        }
    }

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
            <div>
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
            </div>
            </div>
            </>
            );
        }
    }

    export default AccountPage