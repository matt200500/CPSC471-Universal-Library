import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class BrowseBooks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Grid container align="center">
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
  }
}
