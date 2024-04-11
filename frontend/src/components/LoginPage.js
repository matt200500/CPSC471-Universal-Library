import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { userId, password } = this.state;
    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login successful", data);
    } else {
      alert("Invalid credentials");
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          onChange={this.handleInputChange}
          value={this.state.userId}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <button type="submit">Login</button>
      </form>
      </>
    );
  }
}
