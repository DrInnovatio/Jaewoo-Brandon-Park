import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  font: {
    color: "green",
    fontSize: "20px"
  }
}));

function handleClick(event) {
  event.preventDefault();
}

export default function NavBar() {
  const classes = useStyles();
  return (
    <Breadcrumbs className={classes.font} aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}>
        About Me
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page">
        Portfolio
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page">
        Contact
      </Link>
    </Breadcrumbs>
  );
}
