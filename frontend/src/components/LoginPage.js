import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_login: {
        user_id: "",
        User_password: "",
      },
      UserData: []
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user_login: {
        ...this.state.user_login,
        [name]: value
      }
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user_id, User_password } = this.state.user_login;
    const response = await fetch(`/api/login?user_id=${user_id}&User_password=${User_password}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem('user_id', data.user_id);
      this.setState({ UserData: data });
      alert("Successfully logged in");
    } else {
      alert("Failed to login");
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
      <div className="login-stuff">
        <h1>Input your Username and Password Below</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="user_id"
            placeholder="User ID"
            onChange={this.handleInputChange}
            value={this.state.userId}
          />
          <input
            type="password"
            name="User_password"
            placeholder="password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
        <div className="signup-stuff">
          <p>If you do not have an account, you can create one by pressing the button below:</p>
          <a href="signup">Create Account</a>
        </div>
      </>
    );
  }
}
