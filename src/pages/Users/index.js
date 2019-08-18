import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    mt: {
        marginTop: '50px'
    }
}))
const Users = (props) => {
    const classes = useStyles();
    return (<h1 className={classes.mt}>Users</h1>);
}

export default Users;