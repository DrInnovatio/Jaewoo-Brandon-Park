import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CenteredTabs from "./Navbar";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Roll";
import Slide from "./Slide";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";


//https://www.react-reveal.com/examples/

const useStyles = makeStyles(theme => ({
	root: {
		display: "grid",
		margin: "auto",
		background: "#ad5389", 
		background: "-webkit-linear-gradient(to right, #3c1053, #ad5389) " ,
		background: "linear-gradient(to right, #3c1053, #ad5389)"
	},

	h1: {
		textAlign: "center",
		margin: "1% auto",
		fontFamily: 'Montserrat', 
		color:"#e9e1cc"
	},

	arrow:{
		margin: "32% auto 15px",
		position: "relative",
		width: "15%",
		textAlign: "center",
		color:"#e9e1cc",
		background: "#c94b4b",
		background: "-webkit-linear-gradient(to right, #4b134f, #c94b4b)",
		background: "linear-gradient(to right, #4b134f, #c94b4b)"

	},
	explain:{
		margin: "3% auto",
		padding: "1% 5%",
		color:"#e9e1cc",
		textAlign: "center",
		background: "#c94b4b",
		background: "-webkit-linear-gradient(to right, #4b134f, #c94b4b)",
		background: "linear-gradient(to right, #4b134f, #c94b4b)"
	}
}));

function ImageGridList() {
	const classes = useStyles();

	return (
		<Grid item xs={12} className={classes.root} id="portfolio">
			<CenteredTabs/>
			<Zoom left>
				<h1 className={classes.h1}>PORTFOLIO</h1>
			</Zoom>

			<div>
				<Slide />
			</div>

			<div className={classes.arrow}>
				<ArrowUpwardIcon />
				<span>CLICK THE WINDOW</span>
			</div>
			<Fade bottom>
				<p className={classes.explain}>
					As I am still a newbie developer, I have NOT done these kinds of
					projects yet. Hopefully, it will happen to me soon. <br />
					This section is just to show my React programming skill.
				</p>
			</Fade>
		</Grid>
	);
}

export default ImageGridList;
