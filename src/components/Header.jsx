import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authActions, loadingActions } from "../actions";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ signOut, history, showLoading, hideLoading }) => {
  const classes = useStyles();

  const onClick = async event => {
    event.preventDefault();
    showLoading();
    await signOut();
    hideLoading();
    history.replace("signin");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Projects
          </Typography>
          <Button onClick={onClick} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = {
  signOut: authActions.signOut,
  showLoading: loadingActions.show,
  hideLoading: loadingActions.hide
};

export default connect(null, mapDispatchToProps)(withRouter(Header));
