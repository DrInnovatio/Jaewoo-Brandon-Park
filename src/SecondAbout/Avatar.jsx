import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import JW from "./JW.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: "100px",
      height: "100px",
      marginLeft: "45%"
    }
  }
}));

function ImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="JaewooBrandonPark" src={JW} />
    </div>
  );
}

export default ImageAvatar;
