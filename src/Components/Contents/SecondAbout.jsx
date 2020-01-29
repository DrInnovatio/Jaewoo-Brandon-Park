import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import JW from "../images/JW.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f1f9f9",
    width: "100%",
    height: 775,
    margin: "auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 50,
    height: 360
  },
  paperGroup: {
    width: "90%",
    margin: "auto"
  },
  about: {
    textAlign: "center",
    backgroundColor: "pink",
    paddingTop: 15,
    fontSize: 55,
    margin: "auto",
    width: "100%"
  },
  face: {
    width: 160,
    height: 160,
    margin: "auto",
    marginTop: 30
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.about}>About Me</h1>
      <Avatar className={classes.face} alt="Brandon" src={JW} />
      <Grid className={classes.paperGroup} container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
