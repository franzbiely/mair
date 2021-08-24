import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch', },
    },
    
    
  }));

function Products() {
    const classes = useStyles();
    return (
                <Grid container justifyContent="center" spacing={1}>
                    <Grid item xs={2}>
                    <Paper className={classes.paper}>
                              
                                Name: 
                           
                             <Box mt={5} >
                                 Quantity:  
                            </Box>
                             <Box mt={2}>
                                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                    Add
                                </Button> 
                            </Box> 
                            </Paper>                     
                    </Grid>
                    <Grid item xs={2}>    
                    <Paper className={classes.paper}>  
                        <form className={classes.root} noValidate autoComplete="off"> 
                            <TextField id="name" label="Product name"  />
                            <TextField id="quantity" label="Product quantity"  type="number" />
                        </form>   
                        </Paper>                     
                    </Grid>
                </Grid>
           
    )
}
export default Products;