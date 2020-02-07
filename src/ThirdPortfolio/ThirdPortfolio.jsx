import React from "./node_modules/react";
import GridListTile from "./node_modules/@material-ui/core/GridListTile";
import { makeStyles } from "./node_modules/@material-ui/core/styles";
import GridList from "./node_modules/@material-ui/core/GridList";
import Paper from "./node_modules/@material-ui/core/Paper";
import Grid from "./node_modules/@material-ui/core/Grid";
import tileData from "./tileData";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    backgroundColor: "#d3fcc0",
    height: 775,
    width: "100%"
  },
  gridList: {
    width: "90%",
    height: 500,
    marginTop: 30,
    paddingLeft: 50
  },
  h1: {
    textAlign: "center",
    paddingTop: 40
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.h1}>PORTFOLIO</h1>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <GridList cellHeight={200} className={classes.gridList} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
