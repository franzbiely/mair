import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

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
            <Grid container spacing={12}>
                <Grid container justifyContent="center" spacing={9}>
                    <Grid item xs={2}>
                             <Box mt={5} > Name: </Box> 
                             <Box mt={5} > Quantity:  </Box>
                             <Box mt={2}> <Button variant="contained" color="primary"> Add </Button> </Box>                      
                    </Grid>
                    <Grid item xs={2}>      
                        <form className={classes.root} noValidate autoComplete="off"> 
                            <TextField id="name" label="Product name"  />
                            <TextField id="name" label="Product quantity"  type="number" />
                        </form>                      
                    </Grid>
                </Grid>
            </Grid>
    )
}
export default Products;