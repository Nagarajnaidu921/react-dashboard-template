import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AuthServ from '../../services/Auth/auth.service';
import UserServ from '../../services/Users/user.service';

const useStyles = makeStyles(theme => ({
    mt: {
        marginTop: '50px'
    }
}))
const Users = (props) => {
    const classes = useStyles();
    console.log(AuthServ.getUserInfo());
    async function getAllUsers() {
        try {
            const res = await UserServ.getAllUsers();
            console.log(res)
        } catch(e) {
            console.log(e)
        }
    }
    getAllUsers();
    return (<h1 className={classes.mt}>Users</h1>);
}

export default Users;