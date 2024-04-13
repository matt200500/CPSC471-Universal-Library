import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {
        1: { 'Title': 'BirthdayBananza', 'Date': "01/02/03", 'Admin_ID': 1 },
        2: { 'Title': 'BirthdayPolooza', 'Date': "02/03/04", 'Admin_ID': 2 },
        3: { 'Title': 'BirthdayBall', 'Date': "03/04/05", 'Admin_ID': 3 },
        4: { 'Title': 'BirthdayBand', 'Date': "04/05/06", 'Admin_ID': 4 },
        5: { 'Title': 'BirthdayBang', 'Date': "05/06/07", 'Admin_ID': 5 },
        6: { 'Title': 'BirthdayBoomarang', 'Date': "06/07/08", 'Admin_ID': 6 },
      }
    }
  }

  getEventList() {
    return [
      { 'Event_ID': 1, 'Title': 'BirthdayBananza', 'Date': "01/02/03", 'Admin_ID': 1 },
      { 'Event_ID': 2, 'Title': 'BirthdayPolooza', 'Date': "02/03/04", 'Admin_ID': 2 },
      { 'Event_ID': 3, 'Title': 'BirthdayBall', 'Date': "03/04/05", 'Admin_ID': 3 },
      { 'Event_ID': 4, 'Title': 'BirthdayBand', 'Date': "04/05/06", 'Admin_ID': 4 },
      { 'Event_ID': 5, 'Title': 'BirthdayBang', 'Date': "05/06/07", 'Admin_ID': 5 },
      { 'Event_ID': 6, 'Title': 'BirthdayBoomarang', 'Date': "06/07/08", 'Admin_ID': 6 },
    ]
  }

  getMainGrid(event_list) {
    let bookrow_list = [];
    const WIDTH = 4;

    let event_counter = 0;
    let row_counter = 0;
    let length = event_list.length;
    let row = [];
    while(event_counter < length) {
      row = [];
      for(let i = 0; i < WIDTH && event_counter < length; ++i) {
        row.push(this.getSingleEventGrid(event_list[event_counter]));

        event_counter++;
      }
      bookrow_list.push(this.getRowGrid(row.slice(0), "Row " + row_counter));
      row_counter++;
    }
    return <Grid container direction="column" justifyContent="center" alignItems="center" style={{"marginLeft": "5%", "marginRight": "5%"}}>
        {bookrow_list}
      </Grid>
  }

  getRowGrid(singlegrid_list, ky) {
    return <Grid
        container item
        direction="row"
        key={ky}
        justifyContent="center"
        alignItems="center"
        xs={12}>
        {singlegrid_list}
      </Grid>
  }

  getSingleEventGrid(ev) {
    return <Grid item zeroMinWidth key={ev['Event_ID']} xs={3}>
      <img width="80%" height="70%" src="https://st.depositphotos.com/1594308/1713/i/450/depositphotos_17138943-stock-photo-kids-at-birthday-party.jpg" alt="A birthday party celebration"/>
      <Typography noWrap component="h4" variant="subtitle2">{ev['Title']}</Typography>
    </Grid>;
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
        {this.getMainGrid(this.getEventList())}
      </>
    );
  }
}

export default EventPage
