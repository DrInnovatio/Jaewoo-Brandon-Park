import React from "./node_modules/react";
//import ReactDOM from "react-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import JW from "../images/JW.jpg";
//import ReactCardFlip from "react-card-flip";
//import "./SecondAbout.css";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: "#f1f9f9",
//     width: "100%",
//     height: 775,
//     margin: "auto"
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     marginTop: 50,
//     height: 360
//   },
//   paperGroup: {
//     width: "90%",
//     margin: "auto"
//   },
//   about: {
//     textAlign: "center",
//     backgroundColor: "pink",
//     paddingTop: 15,
//     fontSize: 55,
//     margin: "auto",
//     width: "100%"
//   },
//   face: {
//     width: 160,
//     height: 160,
//     margin: "auto",
//     marginTop: 30
//   }
// }));

// export default function FullWidthGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <h1 className={classes.about}>About Me</h1>
//       <Avatar className={classes.face} alt="Brandon" src={JW} />
//       <Grid className={classes.paperGroup} container spacing={3}>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

import FlipCard from "./node_modules/react-flipcard";

var App = React.createClass({
  getInitialState() {
    return {
      isFlipped: false
    };
  },

  showBack() {
    this.setState({
      isFlipped: true
    });
  },

  showFront() {
    this.setState({
      isFlipped: false
    });
  },

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  },

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  },

  render() {
    return (
      <div>
        {/* Default behavior is horizontal flip on hover, or focus */}
        <FlipCard>
          {/* The first child is used as the front of the card */}
          <div>
            <div>Front</div>
            <div>
              <small>(horizontal flip)</small>
            </div>
          </div>
          {/* The second child is used as the back of the card */}
          <div>Back</div>
        </FlipCard>

        {/* The `type` attribute allows using a vertical flip */}
        <FlipCard type="vertical">
          <div>
            <div>Front</div>
            <div>
              <small>(vertical flip)</small>
            </div>
          </div>
          <div>Back</div>
        </FlipCard>

        {/*
          The `disabled` attribute allows turning off the auto-flip
          on hover, or focus. This allows manual control over flipping.

          The `flipped` attribute indicates whether to show the front,
          or the back, with `true` meaning show the back.
        */}
        <FlipCard
          disabled={true}
          flipped={this.state.isFlipped}
          onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}
        >
          <div>
            <div>Front</div>
            <button type="button" onClick={this.showBack}>
              Show back
            </button>
            <div>
              <small>(manual flip)</small>
            </div>
          </div>
          <div>
            <div>Back</div>
            <button type="button" ref="backButton" onClick={this.showFront}>
              Show front
            </button>
          </div>
        </FlipCard>
      </div>
    );
  }
});

export default App;
