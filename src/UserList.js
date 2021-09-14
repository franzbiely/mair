import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ProductContext } from "./ProductContext";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    <ProductContext.Consumer>
      {({ user, deleteUser, editUser }) => {
        return (
          <Grid item xs={12}>
            <h1> User List</h1>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      {" "}
                      <b>First Name</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Last Name</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Birthday</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Age</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Username</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Email</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Password</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Edit</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Delete</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user?.map((row,i) => (
                    <TableRow key={row.category}>
                      <TableCell component="th" scope="row">
                        {row.firstName}
                      </TableCell>
                      <TableCell align="left">{row.lastName}</TableCell>
                      <TableCell align="left">{row.birthday}</TableCell>
                      <TableCell align="left">{row.age}</TableCell>
                      <TableCell align="left">{row.userName}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.password}</TableCell>
                      <TableCell align="left">
                        <Button
                          onClick={() => {
                            editUser(i);
                          }}
                        >
                          <EditIcon style={{ color: "blue" }} />
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          onClick={() => {
                            deleteUser(i);
                          }}
                        >
                          <DeleteIcon style={{ color: "red" }} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        );
      }}
    </ProductContext.Consumer>
  );
}
