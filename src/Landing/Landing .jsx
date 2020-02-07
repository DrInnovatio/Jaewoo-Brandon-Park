import React, { useEffect, useRef } from "react";
import "./landing.css";
//import { Tween, Timeline } from "react-gsap";
//import gsap, { Power2 } from "gsap";
//import { makeStyles } from "@material-ui/core/styles";
import TweenMax, { Power2 } from "gsap";
import ReactTypingEffect from "react-typing-effect";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import tiger4 from "./tiger4.jpg";

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
    <header>
      <nav>Jaewoo Brandon Park</nav>
      <section>
        <div ref={el => (main = el)} className="main">
          <img src={tiger4} alt="" />

          <div ref={el => (headline = el)} className="headline">
            Jaewoo Brandon Park
            <span ref={el => (logo = el)} id="logo">
              _[Web Developer]
            </span>
            <p>{ReactTypingEffectDemo()}</p>
          </div>
        </div>
      </section>
      <button className="btn" type="button">
        Go Down
      </button>
      <div ref={el => (slider = el)} className="slider"></div>
    </header>
  );
}

export default Landing;
