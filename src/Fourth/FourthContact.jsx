import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    height: 710,
    backgroundColor: "#ffed9c",
    margin: 0
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  contactForm: {
    marginTop: 40
  },
  message: {
    margin: 0
  }
}));

export default function FourthContact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid className={classes.contactForm} item xs={6}>
          <h1> CONTACT </h1>
          <p>Have a question or want to work together?</p>
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Your Name"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Your Email"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control placeholder="Your Message" as="textarea" rows="3" />
          </Form.Group>
          <Button variant="contained" color="primary" disableElevation>
            Submit
          </Button>
          <div>
            <LinkedInIcon style={{ width: 60, height: 60 }} />
            <GitHubIcon style={{ width: 60, height: 60 }} />
          </div>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
