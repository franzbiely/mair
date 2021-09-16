import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ProductContext } from "./ProductContext";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
      backgroundColor: "white",
      borderRadius: "5px",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "",
    width: "350px",
  },
}));

function LogInForm() {
  const classes = useStyles();

  var { emaill, setEmaill, passwordd, setPasswordd, addLogin, clearTextfield} =
    React.useContext(ProductContext);


  return (
    <Grid
      ccontainer
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <h1> Log in </h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        item
        xs={12}
      >
        <Paper className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="emaill"
              label="Email"
              type="text"
              variant="outlined"
              value={emaill}
              onChange={(e) => setEmaill(e.target.value)}
            />{" "}
            <br />
            <TextField
              id="passwordd"
              label="Password"
              type="Password"
              variant="outlined"
              value={passwordd}
              onChange={(e) => setPasswordd(e.target.value)}
            />{" "}
            <br />
          </form>
          <Router>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <Button
                onClick={(e) => {
                    addLogin(emaill, passwordd);
                    clearTextfield ();
                }}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Login
              </Button>
            </Link>
            <Switch></Switch>
          </Router>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default LogInForm;
