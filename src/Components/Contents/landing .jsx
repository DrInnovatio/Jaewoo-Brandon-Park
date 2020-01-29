import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactTypingEffect from "react-typing-effect";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import tiger from "../images/tiger.jpg";


const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${tiger})`,
    backgroundSize: "cover",
    margin: 0,
    width: "100%",
    height: 775
  },
  box: {
    height: "30%",
    width: "50%",
    backgroundColor: "blue",
    paddingLeft: 20,
    color: "white"
  }
}));

const ReactTypingEffectDemo = () => {
  return (
    <ReactTypingEffect
      text={["It is a truth universally acknowledged, that a competent developer with possession of the innovative mind, must be in want of a job. \t - Pride and Programming -"]} speed={40} 
    />
  )
}

export default function Landing() {
  const classes = useStyles();
  return (
    <Grid spacing={12} className={classes.root} container>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
      >
        <Box className={classes.box}>
          <h1>Hello, I am Jaewoo Brandon Park</h1>
          <br></br>
          <p>{ReactTypingEffectDemo()}</p>
        </Box>
      </Grid>
    </Grid>
  );
}
