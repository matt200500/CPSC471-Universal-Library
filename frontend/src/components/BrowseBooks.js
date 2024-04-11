import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class BrowseBooks extends Component {
  constructor(props) {
    super(props);
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
        <div className="stuff">
          <h1>This is the browse books page</h1>
        </div>
        <Grid container align="center">
        <Grid item align="center" xs={8}>
          <Typography component="h4" variant="h4">
            Book 1
          </Typography>
        </Grid>
        <Grid item align="center" xs={8}>
          <Typography component="h4" variant="h4">
            Book 2
          </Typography>
        </Grid>
        <Grid item align="center" xs={8}>
          <Typography component="h4" variant="h4">
            Book 3
          </Typography>
        </Grid>
      </Grid>;
      </>
    );
  }
}
