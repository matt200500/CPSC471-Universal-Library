import React, { Component } from "react";

export default class BookRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: {
        floorno: "",
        room_id: "",
        max_occupancy: "",
        status: "",
        hastv: "",
      },
      bookCriteria:{
        user_id:'',
        room_id:"",
        time:"",
      },
      createCriteria: {
        floorno: "",
        room_id: "",
        max_occupancy: "",
        status: "",
        hastv: "",
      },
      roomData: [],
      randomData: [],
    };
  }


   // ----------------------------- FOR VIEWING THE LIST OF ROOMS ---------------------------------------
   handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      searchCriteria: {
        ...this.state.searchCriteria,
        [name]: value
      }
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { floorno, room_id, max_occupancy, status, hastv } = this.state.searchCriteria;
    const response = await fetch(`/api/room-data?floorno=${floorno}&room_id=${room_id}&max_occupancy=${max_occupancy}&status=${status}&hastv=${hastv}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ roomData: data });
    } else {
      alert("Failed to fetch room data");
    }
  };


  // ----------------------------- FOR BOOKING A ROOM -----------------------------
  handleSeatChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      bookCriteria: {
        ...this.state.bookCriteria,
        [name]: value
      }
    });
  };

handleBookSeat = async (event) => {
  event.preventDefault();
  
  const user_id = localStorage.getItem('user_id');
  if (user_id == null) {
    alert('User has not logged in');
    return;
  }

  // Update the bookCriteria object with user_id
  this.state.bookCriteria.user_id = user_id

  try {
    const { user_id, room_id, time } = this.state.bookCriteria;
    const response = await fetch(`/api/book-room?user_id=${user_id}&room_id=${room_id}&time=${time}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ randomData: data });
      alert("Successfully booked a room");
    } else {
      // Handle error response
      alert("failed to book room");
      console.error('Failed to book seat');
    }
  } catch (error) {
    // Handle network errors
    console.error('Network error:', error);
  }
};

  // ----------------------------- FOR CREATING A NEW ROOM ---------------------------------------
  handleCreateChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      createCriteria: {
        ...this.state.createCriteria,
        [name]: value
      }
    });
  };

handleCreateRoom = async (event) => {
  event.preventDefault();
  const administrator_id = localStorage.getItem('administrator_id');
  if (administrator_id == null) {
    alert('Administrator has not logged in');
    return;
  }

  try {
    const { floorno, room_id, max_occupancy, status, hastv } = this.state.createCriteria;
    const response = await fetch(`/api/create-room?floorno=${floorno}&room_id=${room_id}&max_occupancy=${max_occupancy}&status=${status}&hastv=${hastv}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ randomData: data });
      alert("Successfully created a room");
    } else {
      // Handle error response
      alert("failed to create room");
      console.error('Failed to create room');
    }
  } catch (error) {
    // Handle network errors
    console.error('Network error:', error);
  }
};


  // ------------------------------- RENDER PAGE BELOW -------------------------------
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
        <div className="seat-description">
        <h1>Search For Rooms by Room Criteria</h1>
        <p> To get started on searching a Room, fill the fields below.
          If you do not want any criteria for a field you can leave it empty.
          Once you have your fields set, press the "Search for Rooms" button.
          The rooms which exhibit the same values as your criteria will appear in the table below</p>
      </div>
      <div className="search-seat">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="floorno"
            placeholder="Floor Number"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.floorno}
          />
          <input
            type="text"
            name="room_id"
            placeholder="Room ID"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.room_id}
          />
          <input
            type="text"
            name="max_occupancy"
            placeholder="Max Occupancy"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.max_occupancy}
          />
          <select
            type="text"
            name="status"
            placeholder="status"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.status}
          >
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
          </select>
          <select
            type="text"
            name="hastv"
            placeholder="hastv"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.hastv}
          >
            <option value="">Has a TV</option>
            <option value="True">True</option>
            <option value="False">False</option>

          </select>
          <button type="submit">Search For Rooms</button>
        </form>
        <p> Admins can create a room by filling the credentials below</p>
        <form onSubmit={this.handleCreateRoom}>
          <input
            type="text"
            name="floorno"
            placeholder="Floor Number"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.floorno}
          />
          <input
            type="text"
            name="room_id"
            placeholder="Room ID"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.room_id}
          />
          <input
            type="text"
            name="max_occupancy"
            placeholder="Max Occupancy"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.max_occupancy}
          />
          <select
            type="text"
            name="status"
            placeholder="status"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.status}
          >
            <option value="">Select Status</option>
            <option value="Available">Available</option>
          </select>
          <select
            type="text"
            name="hastv"
            placeholder="hastv"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.hastv}
          >
            <option value="">Has a TV</option>
            <option value="True">True</option>
            <option value="False">False</option>

          </select>
          <button type="submit">Create New Room</button>
        </form>
      </div>
      <div className="Book-Seat">
        <form onSubmit={this.handleBookSeat}>
            <input
              type="text"
              name="room_id"
              placeholder="Room ID"
              onChange={this.handleSeatChange}
              value={this.state.bookCriteria.room_id}
            />
            <select
              type="text"
              name="time"
              placeholder="time"
              onChange={this.handleSeatChange}
              value={this.state.bookCriteria.time}
            >
              <option value="">Select Time (Hours)</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <button type="submit">Book Room</button>
          </form>
      </div>
      <div className="seat-list">
        <h2> List of Rooms Within The Universal Library:</h2>
      </div>
      <div className="table_container">
        <table border='1'>
          <tr>
            <th>Floor Number</th>
            <th>Room ID</th>
            <th>Max Occupancy</th>
            <th>Status</th>
            <th>Has a TV</th>
          </tr>
          {this.state.roomData.map(room => (
            <tr key={room.floorno}>
              <td>{room.floorno_id}</td>
              <td>{room.room_id}</td>
              <td>{room.max_occupancy}</td>
              <td>{room.status}</td>
              <td>{room.hastv}</td>
            </tr>
          ))}
        </table>
      </div>
      </>
    );
  }
}