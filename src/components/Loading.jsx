import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    left: "50%",
    top: "50%",
    width: "100%",
    height: "100%",
    margin: "-20px",
    "z-index": 9999
  }
}));

const Loading = ({ show }) => {
  const classes = useStyles();

  if (!show) {
    return <div></div>;
  }

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

const mapStateToProps = state => ({ show: state.loading });

export default connect(mapStateToProps)(Loading);
