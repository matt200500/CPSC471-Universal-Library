import React, { Component } from "react";


class SeatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: [
      { seat_num: 11, floorno: 1, type: "Standard", status: "Available" },
      { seat_num: 22, floorno: 1, type: "Premium", status: "Occupied" },
      { seat_num: 33, floorno: 2, type: "Standard", status: "Available" }],
      searchCriteria: {
        seat_num: "",
        floorno: "",
        type: "",
        status: ""
      }
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      searchCriteria: {
        ...this.state.searchCriteria,
        [name]: value
      }
    });
  };

  renderSeats() {
    // Map over the seats array and render each seat
    return this.state.seats.map(seat => (
      <div key={seat.seat_num}>
        <p>Seat Number: {seat.seat_num} 
        {'      '}Floor Number: {seat.floorno}
        {'      '}Type: {seat.type}
        {'      '}Status: {seat.status}</p>
      </div>
    ));
  }

  handleSearch() {
    const { searchCriteria } = this.state;

    // Construct the request body
    const requestBody = JSON.stringify(searchCriteria);
  
    // Send a POST request to the server
    fetch('/api/seats/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: requestBody
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse response body as JSON
    })
    .then(data => {
      // Update component state with the retrieved seats
      this.setState({ seats: data });
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error
    });
  }

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
      </div>
      <div className="search-seat">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="seat_num"
            placeholder="Seat Number"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.userId}
          />
          <input
            type="text"
            name="floorno"
            placeholder="Floor Number"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.floorno}
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.type}
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.status}
          />
          <button type="submit">Search For Seats</button>
        </form>
      </div>
      <div className="seat-list">
        <h2> List of Seats Within The Universal Library:</h2>
        <table>
          <tr>
            <th>Seat Number</th>
            <th>Floor Number</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="Seat-Grid">
        <h2>All Seats</h2>
        {this.renderSeats()}
      </div>
      </>
    );
  }
}

export default SeatPage