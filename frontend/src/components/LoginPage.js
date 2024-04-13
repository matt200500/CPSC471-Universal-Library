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
<<<<<<< HEAD
      console.log(data);
      localStorage.setItem('user_id', data.user_id);
      this.setState({ UserData: data });
      alert("Successfully logged in");
=======
      console.log("Login successful", data);
      localStorage.setItem('user', JSON.stringify(data));
      this.props.history.push('/');
>>>>>>> 8c7dce8b2c6c42e2c44ee45e9906c523d8c50b82
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
      <div className="login-stuff">
        <h1>Input your Username and Password Below</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
<<<<<<< HEAD
            name="user_id"
=======
            name="userId"
>>>>>>> 8c7dce8b2c6c42e2c44ee45e9906c523d8c50b82
            placeholder="User ID"
            onChange={this.handleInputChange}
            value={this.state.userId}
          />
          <input
            type="password"
<<<<<<< HEAD
            name="User_password"
            placeholder="password"
=======
            name="password"
            placeholder="Password"
>>>>>>> 8c7dce8b2c6c42e2c44ee45e9906c523d8c50b82
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <button type="submit">Login</button>
        </form>
<<<<<<< HEAD
=======
      </div>
      <div className="signup-stuff">
        <p>If you do not have an account, you can create one by pressing the button below:</p>
        <a href="signup">Create Account</a>
>>>>>>> 8c7dce8b2c6c42e2c44ee45e9906c523d8c50b82
      </div>
        <div className="signup-stuff">
          <p>If you do not have an account, you can create one by pressing the button below:</p>
          <a href="signup">Create Account</a>
        </div>
      </>
    );
  }
}
