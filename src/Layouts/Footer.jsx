import React from "./node_modules/react";
import { makeStyles } from "./node_modules/@material-ui/core/styles";
import Paper from "./node_modules/@material-ui/core/Paper";
import Tabs from "./node_modules/@material-ui/core/Tabs";
import Tab from "./node_modules/@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%"
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Portfolio" />
        <Tab label="Contact" />
      </Tabs>
    </Paper>
  );
}
