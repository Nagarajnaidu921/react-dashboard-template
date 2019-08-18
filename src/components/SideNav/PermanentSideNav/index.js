import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {
    List,
    ListItem,
    ListItemText,
    MenuList,
    MenuItem,
    Typography
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { ExitToApp, Home, AccountCircle } from '@material-ui/icons';

const drawerWidth = 240;

const routes = [
    {
        text: 'Home',
        icon: (<Home/>),
        path: '/'
    },
    {
        text: 'Login',
        icon: (<ExitToApp/>),
        path: '/login'
    },
    {
        text: 'Users',
        icon: (<AccountCircle/>),
        path: '/users'
    },

]
const useStyles = makeStyles(theme => ({

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        // zIndex: theme.zIndex.appBar + 200
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },

}));

const PermanentSideNav = (props) => {
    const classes = useStyles();

    return (

        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                }),
            }}
            open={props.open}
            onMouseEnter={props.handleMouseEvent}
            onMouseLeave={props.handleMouseEvent}
        >
            <div className={classes.toolbar}>

            </div>
            <Divider />

            <MenuList>
                {routes.map((x, id) => {
                    return (
                        <MenuItem key={id} component={Link} to={x.path} selected={x.path === props.location.pathname}>
                            <ListItemIcon>{x.icon}</ListItemIcon>
                            <Typography>{x.text}</Typography>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Drawer>

    );
}

export default withRouter(PermanentSideNav);

