import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_login: {
        user_id: "",
        User_password: "",
      },
      admin_login: {
        administrator_id: "",
        Administrator_password: '',
      },
      AdminData: [],
      UserData: [],
    };
  }



  // ------------------------------------------- FOR USERS LOGGING IN ---------------------------
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
      alert("Successfully logged in as a User");
    } else {
      alert("Failed to login");
    }
  };
// ---------------------------------------- FOR ADMINS LOGGING IN ---------------------------------

handleAdminChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    admin_login: {
      ...this.state.admin_login,
      [name]: value
    }
  });
};

handleAdminSubmit = async (e) => {
  e.preventDefault();
  const { administrator_id, Administrator_password } = this.state.admin_login;
  const response = await fetch(`/api/adminlogin?administrator_id=${administrator_id}&Administrator_password=${Administrator_password}`);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    localStorage.setItem('administrator_id', data.administrator_id);
    this.setState({ AdminData: data });
    alert("Successfully logged in as an Admin");
  } else {
    alert("Failed to login");
  }
};


// ------------------------------------ RENDER BELOW ------------------------------------
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
          <h1> Login for Users</h1>
          <p className="login-text">Input your Username and Password Below</p>
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
          <h1> Login for Admins</h1>
          <p className="login-text">Input your Admin Username and Password Below</p>
          <form onSubmit={this.handleAdminSubmit}>
            <input
              type="text"
              name="administrator_id"
              placeholder="Admin ID"
              onChange={this.handleAdminChange}
              value={this.state.userId}
            />
            <input
              type="password"
              name="Administrator_password"
              placeholder="password"
              onChange={this.handleAdminChange}
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
