import React, { Component } from "react";


class SeatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: {
        seat_num: "",
        floorno: "",
        type: "",
        status: ""
      },
      bookCriteria:{
        user_id:'',
        seat_number:"",
        time:"",
      },
      seatData: [],
      randomData: [],
    };
  }

  // ----------------------------- FOR VIEWING THE LIST OF SEATS ---------------------------------------
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
    const { seat_num, floorno, type, status } = this.state.searchCriteria;
    const response = await fetch(`/api/seat-data?seat_num=${seat_num}&floorno=${floorno}&type=${type}&status=${status}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ seatData: data });
    } else {
      alert("Failed to fetch seat data");
    }
  };

  // ----------------------------- FOR BOOKING A SEAT -----------------------------
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
  this.setState({
    bookCriteria: {
      ...this.state.bookCriteria,
      user_id: user_id
    }
  });

  try {
    const { user_id, seat_number, time } = this.state.bookCriteria;
    const response = await fetch(`/api/book-seat?user_id=${user_id}&seat_number=${seat_number}&time=${time}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ randomData: data });
      alert("Successfully booked a seat");
    } else {
      // Handle error response
      alert("failed to book seat");
      console.error('Failed to book seat');
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
        <h1>Search For Seats By Seat Criteria</h1>
        <p> To get started on searching a seat, fill the fields below.
          If you do not want any criteria for a field you can leave it empty.
          Once you have your fields set, press the "Search for Seats" button.
          The seats which exhibit the same values as your criteria will appear in the table below</p>
      </div>
      <div className="search-seat">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="seat_num"
            placeholder="Seat Number"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.seat_num}
          />
          <input
            type="text"
            name="floorno"
            placeholder="Floor Number"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.floorno}
          />
          <select
            type="text"
            name="type"
            placeholder="Type"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.type}
          >
            <option value="">Select Type</option>
            <option value="Desk">Desk</option>
            <option value="Couch">Couch</option>
            <option value="Chair">Chair</option>
            <option value="BeanBag">BeanBag</option>
          </select>
          <select
            type="text"
            name="status"
            placeholder="Status"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.status}
          >
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
          </select>
          <button type="submit">Search For Seats</button>
        </form>
      </div>
      <div className="Book-Seat">
        <form onSubmit={this.handleBookSeat}>
            <input
              type="text"
              name="seat_number"
              placeholder="Seat Number"
              onChange={this.handleSeatChange}
              value={this.state.bookCriteria.seat_number}
            />
            <select
              type="text"
              name="time"
              placeholder="time"
              onChange={this.handleSeatChange}
              value={this.state.searchCriteria.time}
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
            <button type="submit">Book Seat</button>
          </form>
      </div>
      <div className="seat-list">
        <h2> List of Seats Within The Universal Library:</h2>
      </div>
      <div className="table_container">
        <table border='1'>
          <tr>
            <th>Seat Number</th>
            <th>Floor Number</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
          {this.state.seatData.map(seat => (
            <tr key={seat.seat_num}>
              <td>{seat.seat_num}</td>
              <td>{seat.floorno_id}</td>
              <td>{seat.type}</td>
              <td>{seat.status}</td>
            </tr>
          ))}
        </table>
      </div>
      </>
    );
  }
}

export default SeatPage