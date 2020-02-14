import React from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";
import ImageAvatar from "./Avatar";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import "./SecondMainApp.css";

function SecondMainApp() {
  return (
    <div>
      <Zoom top>
        <h1 className="about">About Me</h1>
      </Zoom>
      <Flip>
        <ImageAvatar />
      </Flip>

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
    </div>
  );
}

export default SecondMainApp;
