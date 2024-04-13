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
      rentCriteria:{
        user_id:'',
        book_id:"",
        time:"",
      },
      createCriteria: {
        book_id: "",
        title: "",
        publisher: "",
        catalog: "",
        genre: "",
        status: "",
        shelf_no: "",
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
    const { book_id, title, publisher, catalog, genre, status, shelf_no} = this.state.searchCriteria;
    const response = await fetch(`/api/book-data?book_id=${book_id}&title=${title}&publisher=${publisher}&catalog=${catalog}&genre=${genre}&status=${status}&shelf_no=${shelf_no}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ BookData: data });
    } else {
      alert("Failed to fetch book data");
    }
  };

  // ----------------------------- FOR CREATING A NEW BOOK ---------------------------------------
  handleCreateChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      createCriteria: {
        ...this.state.createCriteria,
        [name]: value
      }
    });
  };

handleCreateBook = async (event) => {
  event.preventDefault();
  const administrator_id = localStorage.getItem('administrator_id');
  if (administrator_id == null) {
    alert('Administrator has not logged in');
    return;
  }

  try {
    const { book_id, title, publisher, catalog, genre, status, shelf_no } = this.state.createCriteria;
    const response = await fetch(`/api/create-book?book_id=${book_id}&title=${title}&publisher=${publisher}&catalog=${catalog}&genre=${genre}&status=${status}&shelf_no=${shelf_no}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ randomData: data });
      alert("Successfully created a book");
    } else {
      // Handle error response
      alert("failed to create a book");
      console.error('Failed to create a book');
    }
  } catch (error) {
    // Handle network errors
    console.error('Network error:', error);
  }
};


  // ----------------------------- FOR RENTING A BOOK -----------------------------
  handleBookChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      rentCriteria: {
        ...this.state.rentCriteria,
        [name]: value
      }
    });
  };

handleRentBook = async (event) => {
  event.preventDefault();
  const user_id = localStorage.getItem('user_id');
  if (user_id == null) {
    alert('User has not logged in');
    return;
  }

  // Update the bookCriteria object with user_id
  this.state.rentCriteria.user_id = user_id;

  try {
    const { user_id, book_id, time } = this.state.rentCriteria;
    const response = await fetch(`/api/rent-book?user_id=${user_id}&book_id=${book_id}&time=${time}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ randomData: data });
      alert("Successfully rented a book");
    } else {
      // Handle error response
      alert("failed to rent book");
      console.error('Failed to rent a book');
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
        <h1>Search For Books By Book Criteria</h1>
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
          <input
            type="text"
            name="catalog"
            placeholder="catalog"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.catalog}
          />
          <select
            type="text"
            name="genre"
            placeholder="genre"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.genre}
          >
            <option value="">Select Genre</option>
            <option value="Horror">Horror</option>
            <option value="Fantasy">Fantasy</option>
            <option value="TextBooks">TextBooks</option>
            <option value="ScienceFiction">ScienceFiction</option>
            <option value="Children">Children</option>
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
          <input
            type="text"
            name="shelf_no"
            placeholder="shelf_no"
            onChange={this.handleInputChange}
            value={this.state.searchCriteria.shelf_no}
          />
          <button type="submit">Search For Books</button>
        </form>
        <p> Admins can create a book by filling the credentials below</p>
        <form onSubmit={this.handleCreateBook}>
          <input
            type="text"
            name="book_id"
            placeholder="Book ID"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.book_id}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.title}
          />
          <input
            type="text"
            name="publisher"
            placeholder="publisher"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.publisher}
          />
          <input
            type="text"
            name="catalog"
            placeholder="catalog"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.catalog}
          />
          <select
            type="text"
            name="genre"
            placeholder="genre"
            onChange={this.handleCreateChange}
            value={this.state.createCriteria.genre}
          >
            <option value="">Select Genre</option>
            <option value="Horror">Horror</option>
            <option value="Fantasy">Fantasy</option>
            <option value="TextBooks">TextBooks</option>
            <option value="ScienceFiction">ScienceFiction</option>
            <option value="Children">Children</option>
          </select>
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
          <button type="submit">Create New Book</button>
        </form>
      </div>
      <div className="Book-Seat">
        <form onSubmit={this.handleRentBook}>
            <input
              type="text"
              name="book_id"
              placeholder="Book ID"
              onChange={this.handleBookChange}
              value={this.state.rentCriteria.book_id}
            />
            <select
              type="text"
              name="time"
              placeholder="time"
              onChange={this.handleBookChange}
              value={this.state.rentCriteria.time}
            >
              <option value="">Select Time (Days)</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="8">9</option>
              <option value="8">10</option>
              <option value="8">11</option>
              <option value="8">12</option>
              <option value="8">13</option>
              <option value="8">14</option>
            </select>
            <button type="submit">Rent Book</button>
          </form>
      </div>
      <div className="seat-list">
        <h2> List of Books Within The Universal Library:</h2>
      </div>
      <div className="table_container">
        <table border='1'>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Publisher</th>
            <th>Catalog</th>
            <th>Genre</th>
            <th>Shelf Number</th>
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