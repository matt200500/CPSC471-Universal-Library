import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class BrowseBooks extends Component {
  constructor(props) {
    super(props);
  }

  getBookList() {
    // return the list of books
    return [];
  }

  getSearchFilterBar() {
    // TODO: Use TextField probably for this
  }

  getMainGrid(book_list) {
    let bookrow_list = [];
    const WIDTH = 4;

    let counter = 0;
    let row = [];
    for(let i = 0; i < book_list.length; ++i) {
      if(counter == 0) {
        row = [ getSingleBookGrid(book_list[i]) ];
      } else if(counter > 0 && counter < (WIDTH - 1)) {
        row.push(getSingleBookGrid(book_list[i]));
      } else if(counter == (WIDTH - 1)){
        row.push(getSingleBookGrid(book_list[i]));
        bookrow_list.push(getRowGrid(row.slice(0), i % WIDTH));
        counter = 0;
      } else {
        console.log("When constructing main grid, there was an issue parsing the book list obtained from the database.");
        // log the book??
      }
    }

    return <Grid container direction="column" justifyContent="center" alignItems="center">
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
      { bookrow_items }
    </Grid>;
  }

  getSingleBookGrid(ky) {
    // TODO: Needs to be updated by accepting a book object instead of just a key
    return <Grid item key={ky} xs={3}>
        <img width="100" height="70" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9jdXRlXzNkX2lsbHVzdHJhdGlvbl9vZl9hX3N0YWNrX29mX2Jvb2tzX2lzb2xhdF81MjhhNmU5Ni0zZjllLTRlOGQtYmEyNy1lZGU3OWU0NTg0YTAucG5n.png" alt="photo of stacked books"/>
        <Typography component="h4" variant="h4">BOOK_{num}</Typography>
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
    return (
      <>
      {this.getNavigations()}
      </>
    );
  }
}
