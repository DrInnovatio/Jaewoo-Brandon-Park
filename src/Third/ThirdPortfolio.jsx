import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Roll";
import Slide from "./Slide";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

//https://www.react-reveal.com/examples/

const useStyles = makeStyles(theme => ({
	root: {
		display: "grid",
		height: "100%",
		width: "100%",
		zIndex: 0
	},

	h1: {
		textAlign: "center",
		margin: "20px auto"
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}));

function ImageGridList() {
	const classes = useStyles();

	return (
		<Grid item xs={12} className={classes.root} id="portfolio">
			<Zoom left>
				<h1 className={classes.h1}>PORTFOLIO</h1>
			</Zoom>

			<div>
				<Slide />
			</div>

			<div
				style={{
					marginTop: "450px",
					marginLeft: "auto",
					marginRight: "auto",
					backgroundColor: "white",
					position: "relative",
					width: "15%",
					textAlign: "center"
				}}>
				<ArrowUpwardIcon />
				<span>CLICK THE WINDOW</span>
			</div>
			<Fade bottom>
				<p
					style={{
						marginTop: "40px",
						marginLeft: "auto",
						marginRight: "auto",
						backgroundColor: "pink",
						textAlign: "center"
					}}>
					As I am still a newbie developer, I have NOT done these kinds of
					projects yet. Hopefully, it will happen to me soon. <br />
					This section is just to show my React programming skill.
				</p>
			</Fade>
		</Grid>
	);
}

export default ImageGridList;
