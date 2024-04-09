import React, { Component } from "react";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      middlename: "",
      lastname: "",
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
    const { email, firstname, middlename, lastname, password } = this.state;
    const response = await fetch('/api/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstname,
        middlename,
        lastname,
        user_password: password,
      }),
    });

    if (response.ok) {
      alert("Signup successful");
    } else {
      const errorData = await response.json();
      alert(`Signup failed: ${errorData}`);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={this.handleInputChange}
          value={this.state.firstname}
        />
        <input
          type="text"
          name="middlename"
          placeholder="Middle Name (Optional)"
          onChange={this.handleInputChange}
          value={this.state.middlename}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={this.handleInputChange}
          value={this.state.lastname}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
