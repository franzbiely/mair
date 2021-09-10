import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { ProductContext } from "./ProductContext";

// const useStyles = makeStyles((theme) => ({

//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     backgroundColor: 'blue',
//   },
// }));

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
    width: "650px",
  },
}));

function User() {
  const classes = useStyles();

  // const clearFields = () => {
  //     setUseName("");
  //     setLastName("");
  //     setEmail("");
  //     setPassword("");
  //   };

  return (
    <ProductContext.Consumer>
      {({
        addUser,
        firstName,
        lastName,
        birthday,
        age,
        userName,
        email,
        password,
        setFirstName,
        setLastName,
        setUserName,
        setAge,
        setBirthday,
        setEmail,
        setPassword,
      }) => (
        <div>
          <h1>Create Account</h1>
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
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br /> <br />
                <TextField
                  id="UserName"
                  label="Username"
                  variant="outlined"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                  id="birthday"
                  label="Birthday"
                  variant="outlined"
                  type="date"
                  value={birthday}
                  style={{ width: "29%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setBirthday(e.target.value)}
                />
                <TextField
                  id="age"
                  label="Age"
                  variant="outlined"
                  value={age}
                  type="number"
                  style={{ width: "15%" }}
                  onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </form>
              <Button
                onClick={(e) =>
                  addUser(
                    firstName,
                    lastName,
                    birthday,
                    age,
                    userName,
                    email,
                    password
                  )
                }
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Log in
              </Button>
            </Paper>
          </Grid>
        </div>
      )}
    </ProductContext.Consumer>
  );
}
export default User;
