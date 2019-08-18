import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    mt: {
        marginTop: '50px'
    }
}))
const Home = (props) => {
    const classes = useStyles();
    return (<h1 className={classes.mt}>Home</h1>);
}

export default Home;