import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ProductContext } from "./ProductContext";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CategoryList() {
  const classes = useStyles();
  var { categories, deleteCategory, editCategory } =
    React.useContext(ProductContext);

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1> Category List</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  {" "}
                  <b>Category</b>
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
              {categories?.map((row, i) => (
                <TableRow key={row.category}>
                  <TableCell component="th" scope="row">
                    {row.category}
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => {
                        editCategory(i);
                      }}
                    >
                      <EditIcon style={{ color: "blue" }} />
                    </Button>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => {
                        deleteCategory(i);
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
    </Grid>
  );
}
