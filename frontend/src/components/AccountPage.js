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
    events: [],
    user_edit: {
      user_id: "",
      email: "",
      firstname: "",
      middlename: "",
      lastname: "",
      User_password: "",
    },
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
      this.setState({user: data,});
    } else {
      alert("Failed to fetch data");
    }
  }

  fetchBookRentData = async (e) => {
    e.preventDefault();
    const user_id = this.state.user.user_id
    const response = await fetch(`/api/bookrent-data?user=${user_id}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ books: data });
    } else {
      alert("Failed to fetch bookrent data");
    }
  };

  fetchSeatBookData = async (e) => {
    e.preventDefault();
    const user_id = this.state.user.user_id
    const response = await fetch(`/api/seatbook-data?user_id=${user_id}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ seats: data });
    } else {
      alert("Failed to fetch seatbook data");
    }
  };

  fetchRoomBookData = async (e) => {
    e.preventDefault();
    const user_id = this.state.user.user_id
    const response = await fetch(`/api/roombook-data?user=${user_id}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ rooms: data });
    } else {
      alert("Failed to fetch roombook data");
    }
  };

  fetchEventApplyData = async (e) => {
    e.preventDefault();
    const user_id = this.state.user.user_id
    const response = await fetch(`/api/eventapply-data?user=${user_id}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ events: data });
    } else {
      alert("Failed to fetch eventapply data");
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
    const user_id1 = this.state.user.user_id
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
        {user ? (
          <div>
            <p>ID: {user.user_id}</p>
            <p>Email: {user.email}</p>
            <div>
              <h2>Your Book Rentals</h2>
              {this.state.books.map(book => 
                <tr key={book.book}>
                  <td>{book.book}</td>
                  <td>{book.lending_time}</td>
                </tr>)}
            </div>
            <div>
              <h2>Your Seat Bookings</h2>
              {this.state.seats.map(seat => 
                <tr key={seat.seat_number}>
                  <td>{book.seat_number}</td>
                  <td>{book.time}</td>
                </tr>)}
            </div>
            <div>
              <h2>Your Room Bookings</h2>
              {this.state.rooms.map(room => 
                <tr key={room.room}>
                  <td>{room.room}</td>
                  <td>{room.time}</td>
                </tr>)}
            </div>
            <div>
              <h2>Your Event Applications</h2>
              {this.state.events.map(event => 
                <tr key={event.event}>
                  <td>{event.event}</td>
                </tr>)}
            </div>
            <div>
            <h2>Edit User Information</h2>
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
        ) : (
          <p>Loading or no user data available.</p>
        )}
      </div>
      </>
    );
  }
}

export default AccountPage