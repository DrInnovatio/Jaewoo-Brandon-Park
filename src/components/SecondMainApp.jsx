import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import "./SecondMainApp.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import JW from "../images/JW.png";
import { useSpring, animated as a } from "react-spring";


const useStyles = makeStyles(theme => ({

  body: {
	width: "100%",
	height: "100vh",
	margin: "0",
	background: "#283c86",
	background: "-webkit-linear-gradient(to right, #45a247, #283c86)",
	background: "linear-gradient(to right, #45a247, #283c86)"
},  
  avatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: "100px",
      height: "100px",
      marginLeft: "47%",
      marginTop: "10px"
    }
  },
  cards:{
    padding:"30% 7% auto"

  },
  about:{
    textAlign: "center",
    paddingTop: "2%"
  }
}));


function ImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.avatar}>
      <Avatar alt="JaewooBrandonPark" src={JW} />
    </div>
  );
}

function Cards() {
  const classes = useStyles();
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div className={classes.cards} onClick={() => set(state => !state)}>
      <a.div
        class="c front"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      />
      <a.div
        class="c back"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      />
    </div>
  );
}



function SecondMainApp() {
  const classes = useStyles();
	return (
		<div class={classes.body}>

				<Zoom top>
					<h1 className={classes.about} id="aboutMe">
						About Me
					</h1>
				</Zoom>
				<Flip>
					<ImageAvatar />
				</Flip>


       <section className={classes.bunch}>
			<Grid container spacing={1}>
				<Grid item xs={6} sm={3}>
					<Cards />
				</Grid>

				<Grid item xs={6} sm={3}>
					<Cards />
				</Grid>

				<Grid item xs={6} sm={3}>
					<Cards />
				</Grid>

				<Grid item xs={6} sm={3}>
					<Cards />
				</Grid>
			</Grid>
      </section> 

     
		</div>
	);
}

export default SecondMainApp;
