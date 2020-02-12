import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";
import ImageAvatar from "./Avatar";

function Card() {
  return (
    <div>
      <h1>About Me</h1>
      <ImageAvatar />

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

export default Card;
