import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
 
  }));

function ProductList() {
    const classes = useStyles();
    return (
        
      
            <Grid container spacing={0}>
            <Grid item xs={12}>
            <Box mt={5}> <h1>Product List</h1> </Box>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        Items
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                       Name
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                     Quantity
                    </Paper>
                </Grid>
            </Grid>
        
    )
    
}
export default ProductList;