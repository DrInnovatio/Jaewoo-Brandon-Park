// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
//import LightSpeed from "react-reveal/LightSpeed";
//import { Tween, Timeline } from "react-gsap";
//import gsap, { Power2 } from "gsap";
//import Breadcrumbs from "@material-ui/core/Breadcrumbs";
//import { Link } from "react-scroll";
import React, { useEffect, useRef } from "react";
import "./landing.css";
import { makeStyles } from "@material-ui/core/styles";
import TweenMax, { Power2 } from "gsap";
import ReactTypingEffect from "react-typing-effect";
import tiger4 from "../images/tiger4.jpg";
import CenteredTabs from "./Navbar";



const ReactTypingEffectDemo = () => {
	return (
		<ReactTypingEffect
			text={[
				"It is a truth universally acknowledged, that a competent developer with possession of the innovative mind, must be in want of a job.   <!-- Pride and Programming -->"
			]}
			speed={50}
		/>
	);
};

const useStyles = makeStyles(theme => ({
	nav: {
		color: "#00a8cc",
		fontSize: "20px",
		minHeight: "8vh",
		marginLeft: '70%',
		paddingTop: "15px"
	}
}));

// function NavBar() {
// 	const classes = useStyles();
// 	return (
// 		<Breadcrumbs className={classes.nav} aria-label="breadcrumb">
// 			<Link
// 				activeClass="active"
// 				to="home"
// 				spy={true}
// 				smooth={true}
// 				offset={-70}
// 				duration={500}>
// 				Home
// 			</Link>
// 			<Link
// 				activeClass="active"
// 				to="aboutMe"
// 				spy={true}
// 				smooth={true}
// 				offset={-70}
// 				duration={500}>
// 				About Me
// 			</Link>
// 			<Link
// 				activeClass="active"
// 				to="portfolio"
// 				spy={true}
// 				smooth={true}
// 				offset={-70}
// 				duration={500}>
// 				Portfolio
// 			</Link>
// 			<Link
// 				activeClass="active"
// 				to="contact"
// 				spy={true}
// 				smooth={true}
// 				offset={-70}
// 				duration={500}>
// 				Contact
// 			</Link>
// 		</Breadcrumbs>
// 	);
// }

function Landing() {
	let main = useRef(null);
	let headline = useRef(null);
	let logo = useRef(null);
	let slider = useRef(null);

	useEffect(() => {
		TweenMax.fromTo(
			main,
			1,
			{ height: "0%" },
			{ height: "90%", ease: Power2.easeInOut }
		);
		TweenMax.fromTo(
			main,
			1.5,
			{ width: "100%" },
			{ width: "80%", ease: Power2.easeInOut }
		);
		TweenMax.from(headline, 0.8, {
			opacity: 0,
			x: 40,
			ease: Power2.easeOut,
			delay: 0.2
		});
		TweenMax.fromTo(
			slider,
			1.5,
			{ x: "-100%" },
			{ x: "0%", ease: Power2.easeInOut },
			"-=1.2"
		);
		TweenMax.fromTo(
			logo,
			5,
			{ opacity: 0, x: 80 },
			{ opacity: 1, x: 0 },
			"-=0.5"
		);
		TweenMax.fromTo(
			headline,
			3,
			{ opacity: 0, x: 30 },
			{ opacity: 1, x: 0 },
			"-=0.5"
		);
	}, []);
	return (
		<div className="body" id="home ">
			<header>
				<nav>
					<CenteredTabs/>
				</nav>
				<section>
					<div ref={el => (main = el)} className="main">
						<img src={tiger4} alt="" />

						<div ref={el => (headline = el)} className="headline">
							Jaewoo Brandon Park
							<span ref={el => (logo = el)} id="logo">
								_[Web Developer]
							</span>
							<p style={{ marginTop: "10px" }}>{ReactTypingEffectDemo()}</p>
						</div>
					</div>
				</section>
				<div ref={el => (slider = el)} className="slider"></div>
			</header>
		</div>
	);
}

export default Landing;
