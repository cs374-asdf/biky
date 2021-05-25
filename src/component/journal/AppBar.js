import AppBar from "@material-ui/core/AppBar";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function MyAppBar({ onSubmit, string }) {
  const classes = useStyles();

  return (
      <AppBar position="static" style={{width: '100%'}}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            {string}
          </Typography>

          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onSubmit}
          >
            <CheckIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}
