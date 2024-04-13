import React, { Component } from "react";

class SeatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: {
        book_id: "",
        title: "",
        publisher: "",
        catalog: "",
        genre: "",
        status: "",
        shelf_no: "",
      },
      bookCriteria:{
        user_id:'',
        seat_number:"",
        time:"",
      },
      createCriteria: {
        seat_num: "",
        floorno: "",
        type: "",
        status: ""
      },
      BookData: [],
      randomData: [],
    };
  }

  // ----------------------------- FOR VIEWING THE LIST OF BOOKS ---------------------------------------
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
    const { book_id, title, publisher, publish_date, catalog, genre, status, shelf_no} = this.state.searchCriteria;
    const response = await fetch(`/api/book-data?book_id=${book_id}&title=${title}&publisher=${publisher}&catalog=${catalog}&genre=${genre}&status=${status}&shelf_no=${shelf_no}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ BookData: data });
    } else {
      alert("Failed to fetch book data");
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
        <p> To get started on searching a book, fill the fields below.
          If you do not want any criteria for a field you can leave it empty.
          Once you have your fields set, press the "Search for Books" button.
          The seats which exhibit the same values as your criteria will appear in the table below</p>
      </div>
      <div className="search-seat">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="book_id"
            placeholder="Book ID"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.book_id}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.title}
          />
          <input
            type="text"
            name="publisher"
            placeholder="publisher"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.publisher}
          />
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
          <input
            type="text"
            name="shelf_no"
            placeholder="shelf_no"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.shelf_no}
          />
          <button type="submit">Search For Books</button>
        </form>
        <p> Admins can create a seat by filling the credentials below</p>
        <form onSubmit={this.handleCreateSeat}>
          <input
            type="text"
            name="seat_num"
            placeholder="Seat Number"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.seat_num}
          />
          <input
            type="text"
            name="floorno"
            placeholder="Floor Number"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.floorno}
          />
          <input
            type="text"
            name="catalog"
            placeholder="catalog"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.catalog}
          />
          <input
            type="text"
            name="genre"
            placeholder="genre"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.genre}
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
          <input
            type="text"
            name="shelf_no"
            placeholder="shelf_no"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.shelf_no}
          />
          <button type="submit">Create New Seat</button>
        </form>
      </div>
      <div className="seat-list">
        <h2> List of Book Within The Universal Library:</h2>
      </div>
      <div className="table_container">
        <table border='1'>
          <tr>
            <th>Book ID</th>
            <th>title</th>
            <th>publisher</th>
            <th>catalog</th>
            <th>genre</th>
            <th>shelf_no</th>
          </tr>
          {this.state.BookData.map(book => (
            <tr key={book.book_id}>
              <td>{book.book_id}</td>
              <td>{book.title}</td>
              <td>{book.publisher}</td>
              <td>{book.catalog}</td>
              <td>{book.genre}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </table>
      </div>
      </>
    );
  }
}

export default SeatPage