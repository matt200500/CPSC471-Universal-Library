import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class BrowseBooks extends Component {
  constructor(props) {
    super(props);

    const user_id1 = localStorage.getItem('user_id');
    if (user_id == null) {
      alert('User has not logged in');
      return;
    }

    this.state = {
      searchKeyword: "",
      is_admin: false,
      books: {
        1: { 'Title':'Bilbo', 'Status':'Available', 'is_disabled': false, },
        2: { 'Title':'Frodo', 'Status':'Available', 'is_disabled': false, },
        3: { 'Title':'Bilbo', 'Status':'Available', 'is_disabled': false, },
        4: { 'Title':'HelloWorldWorldWorldWorldWorldWorld', 'Status':'Available', 'is_disabled': false, },
        5: { 'Title':'Bilbo', 'Status':'Available', 'is_disabled': false, },
        6: { 'Title':'Frodo', 'Status':'Available', 'is_disabled': false, },
        7: { 'Title':'Bilbo', 'Status':'Available', 'is_disabled': false, },
        8: { 'Title':'Frodo', 'Status':'Available', 'is_disabled': false, },
        9: { 'Title':'Bilbo', 'Status':'Available', 'is_disabled': false, },
        10: { 'Title':'Frodo', 'Status':'Available', 'is_disabled': false, },
      },
      /*
       * Each book stores a dictionary
       *
       * {
       *   ID: (INT),
       *   Title: (String),
       *   Status: ('Availabe' | 'Taken')
       * }
       *
       */

      // Filter state
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const keyword = this.state.searchKeyword;
    const response = await fetch(`api/browse-books`);
    if(response.ok) {
      const data = await response.json();
      console.log(data);
      // TODO: Do stuff with the data
    } else {
      alert("Failed to fetch book data.");
    }
  };

  handleClaim = async (book_id) => {
    let button_disabled = this.state.books[book_id]['is_disabled'];
    if(!button_disabled) {
      this.setState({
        books: {
          ...this.state.books,
          [book_id]: {
            ...this.state.books[book_id],
            'is_disabled': true,
          }
        }
      });
    }
    const user_id = localStorage.getItem('user_id');
    const response = await fetch(`api/claim-book?is_disabled=${button_disabled}&book_id=${book_id}&user_id=${user_id}`);
    if(!response.ok) {
      alert("Failed to send claim data about book.");
    }
  }

  handleUnClaim = async (book_id) => {
    if(this.state.books[book_id]['is_disabled']) {
      this.setState({
        books: {
          ...this.state.books,
          [book_id]: {
            ...this.state.books[book_id],
            'is_disabled': false,
          }
        }
      });
    }
  }

  getBookList() {
    // return the list of books from db
    return [
      {'book_id': 1, 'Shelf_No': 2, 'Title':'Bilbo', 'Publisher':'Joe', 'Publish_Data':'01/02/03', 'Genre':'Fantasy', 'Status':'Available'},
      {'book_id': 2, 'Shelf_No': 3, 'Title':'Frodo', 'Publisher':'Joe', 'Publish_Data':'01/02/04', 'Genre':'Fantasy', 'Status':'Available'},
      {'book_id': 3, 'Shelf_No': 2, 'Title':'Bilbo', 'Publisher':'Joe', 'Publish_Data':'01/02/03', 'Genre':'Fantasy', 'Status':'Available'},
      {'book_id': 4, 'Shelf_No': 3, 'Title':'Frodo', 'Publisher':'Joe', 'Publish_Data':'01/02/04', 'Genre':'Fantasy', 'Status':'Available'},
      {'book_id': 5, 'Shelf_No': 2, 'Title':'Bilbo', 'Publisher':'Joe', 'Publish_Data':'01/02/03', 'Genre':'Fantasy', 'Status':'Available'},
      {'book_id': 6, 'Shelf_No': 3, 'Title':'Frodo', 'Publisher':'Joe', 'Publish_Data':'01/02/04', 'Genre':'Fantasy', 'Status':'Available'},
      {'book_id': 7, 'Shelf_No': 2, 'Title':'Bilbo', 'Publisher':'Joe', 'Publish_Data':'01/02/03', 'Genre':'Fantasy', 'Status':'Available'},
      {'book_id': 8, 'Shelf_No': 3, 'Title':'Frodo', 'Publisher':'Joe', 'Publish_Data':'01/02/04', 'Genre':'Fantasy', 'Status':'Available'},
      {'book_id': 9, 'Shelf_No': 2, 'Title':'Bilbo', 'Publisher':'Joe', 'Publish_Data':'01/02/03', 'Genre':'Fantasy', 'Status':'Available'},
      {'book_id': 10, 'Shelf_No': 3, 'Title':'Frodo', 'Publisher':'Joe', 'Publish_Data':'01/02/04', 'Genre':'Fantasy', 'Status':'Available'},
    ];
  }

  getSearchFilterBar() {
    // TODO: Use TextField probably for this
  }

  getAdminToggleClaimButton(yes, bk_id) {
    if(yes) {
      return <Button variant="contained" onClick={() => this.handleUnClaim(bk_id)}>UnClaim</Button>
    } else {
      return <div />;
    }
  }

  getMainGrid(book_list) {
    let bookrow_list = [];
    const WIDTH = 4;

    console.log("Length of book_list: " + book_list.length);

    let book_counter = 0;
    let row_counter = 0;
    let length = book_list.length;
    let row = [];
    while(book_counter < length) {
      row = [];
      for(let i = 0; i < WIDTH && book_counter < length; ++i) {
        row.push(this.getSingleBookGrid(book_list[book_counter]));

        book_counter++;
      }
      bookrow_list.push(this.getRowGrid(row.slice(0), "Row " + row_counter));
      row_counter++;
    }

    console.log("Length of bookrow_list: " + bookrow_list.length);
    return <Grid container direction="column" justifyContent="center" alignItems="center" style={{"marginLeft": "5%", "marginRight": "5%"}}>
      { bookrow_list }
    </Grid>;
  }

  getRowGrid(book_grids, ky) {
    return <Grid
    container item
    direction="row"
    key={ky}
    justifyContent="center"
    alignItems="center"
    xs={12}>
      { book_grids }
    </Grid>;
  }

  getSingleBookGrid(book) {
    /*
    this.setState({
      books: {
        ...this.state.books,
        [book['book_id']]: { 'Title': book['Title'], 'Status': book['Status'], 'is_disabled': false },
      }
    });
    if(this.state.books[book['book_id']]['Status'] == 'Taken') {
      this.setState({
        books: {
          ...this.state.books,
          [book['book_id']]: {
            ...this.state.books[book['book_id']],
            'is_disabled': true,
          },
        }
      });
    }
    */
    const administrator_id= localStorage.getItem('administrator_id');
    let admin = false;
    if(administrator_id != null) { admin = true }

    return <Grid item zeroMinWidth key={book['book_id']} xs={3}>
        <img width="40%" height="30%" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9jdXRlXzNkX2lsbHVzdHJhdGlvbl9vZl9hX3N0YWNrX29mX2Jvb2tzX2lzb2xhdF81MjhhNmU5Ni0zZjllLTRlOGQtYmEyNy1lZGU3OWU0NTg0YTAucG5n.png" alt="photo of stacked books"/>
        <Typography noWrap component="h4" variant="subtitle2">{this.state.books[book['book_id']]['Title']}</Typography>
        <Button variant="contained" disabled={this.state.books[book['book_id']]['is_disabled']} onClick={() => this.handleClaim(book['book_id'])}>Claim</Button>
        {this.getAdminToggleClaimButton(admin, book['book_id'])}
      </Grid>;
  }

  getNavigations() {
    return <div className="navigation">
      <a href="/">Home</a>
      <a href="browse">Browse Books</a>
      <a href="events">Events/Programs</a>
      <a href="bookseats">Seats</a>
      <a href="bookrooms">Private Rooms</a>
      <a href="contact">Contact</a>
      <a href="login">Login</a>
      <a href="account">Account</a>
    </div>;
  }

  render() {

    const user_id = localStorage.getItem('user_id');

    if (user_id === null) {
    } else {
    }

    return (
      <>
      {this.getNavigations()}
      <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
      {this.getMainGrid(this.getBookList())}
      </>
    );
  }
}
