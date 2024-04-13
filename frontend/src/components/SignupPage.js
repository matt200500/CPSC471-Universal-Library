import React, { Component } from "react";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_create: {
        user_id: "",
        email: "",
        firstname: "",
        middlename: "",
        lastname: "",
        User_password: "",
      },
      admin_create: {
        administrator_id: "",
        email: "",
        firstname: "",
        middlename: "",
        lastname: "",
        Administrator_password: "",
      },
      randomData: [],
    };
  }


  // --------------------------------- FOR CREATING A NEW USER --------------------------------------------------------
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user_create: {
        ...this.state.user_create,
        [name]: value
      }
    });
  };
  
  handleSubmit = async (e) => {
    e.preventDefault();
    const { user_id, email, User_password, firstname, middlename, lastname } = this.state.user_create;
    const response = await fetch(`/api/signup?user_id=${user_id}&email=${email}&User_password=${User_password}&firstname=${firstname}&middlename=${middlename}&lastname=${lastname}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ randomData: data });
      alert("Successfully signed up");
    } else {
      alert("Failed to signup");
    }
  };


// ----------------------------------------- FOR CREATING A NEW ADMIN ----------------------------------------
handleSubmitAdmin = (event) => {
  const { name, value } = event.target;
  this.setState({
    admin_create: {
      ...this.state.admin_create,
      [name]: value
    }
  });
};

handleCreateAdmin = async (event) => {
  event.preventDefault();
  const administrator_id = localStorage.getItem('administrator_id');
  if (administrator_id == null) {
    alert('Administrator has not logged in');
    return;
  }

  try {
    const { administrator_id, email, firstname, middlename, lastname, Administrator_password } = this.state.admin_create;
    const response = await fetch(`/api/create-admin?administrator_id=${administrator_id}&email=${email}&firstname=${firstname}&middlename=${middlename}&lastname=${lastname}&Administrator_password=${Administrator_password}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ randomData: data });
      alert("Successfully created an admin");
    } else {
      // Handle error response
      alert("failed to create an admin");
      console.error('Failed to create an admin');
    }
  } catch (error) {
    // Handle network errors
    console.error('Network error:', error);
  }
};



// ------------------------------------------------ RENDERING BELOW -------------------------------------------
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
        <h1>Signup With The Universal Library Now!</h1>
        <h2></h2>
        <p>Enter your credentials below and press the button to create an account!</p>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="user_id"
            placeholder="User ID"
            onChange={this.handleInputChange}
            value={this.state.user_create.user_id}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.user_create.email}
          />
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={this.handleInputChange}
            value={this.state.user_create.firstname}
          />
          <input
            type="text"
            name="middlename"
            placeholder="Middle Name"
            onChange={this.handleInputChange}
            value={this.state.user_create.middlename}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={this.handleInputChange}
            value={this.state.user_create.lastname}
          />
          <input
            type="password"
            name="User_password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.user_create.User_password}
          />
          <button type="submit">Sign Up</button>
        </form>
        <h1>Create Admin</h1>
        <h2></h2>
        <p>Enter admin credentials below</p>
        <form onSubmit={this.handleCreateAdmin}>
        <input
            type="text"
            name="administrator_id"
            placeholder="Admin ID"
            onChange={this.handleSubmitAdmin}
            value={this.state.admin_create.administrator_id}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleSubmitAdmin}
            value={this.state.admin_create.email}
          />
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={this.handleSubmitAdmin}
            value={this.state.admin_create.firstname}
          />
          <input
            type="text"
            name="middlename"
            placeholder="Middle Name"
            onChange={this.handleSubmitAdmin}
            value={this.state.admin_create.middlename}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={this.handleSubmitAdmin}
            value={this.state.admin_create.lastname}
          />
          <input
            type="password"
            name="Administrator_password"
            placeholder="Password"
            onChange={this.handleSubmitAdmin}
            value={this.state.admin_create.Administrator_password}
          />
          <button type="submit">Create Admin</button>
        </form>
      </div>
      </>
    );
  }
}
