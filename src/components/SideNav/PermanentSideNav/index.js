import React, { useState } from 'react';
import clsx from 'clsx';
import { Link, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {
    MenuList,
    MenuItem,
    Typography,
    Button,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Home, AccountCircle, PowerSettingsNew } from '@material-ui/icons';
import AuthServ from '../../../services/Auth/auth.service';

const drawerWidth = 240;

const routes = [
    {
        text: 'Home',
        icon: (<Home />),
        path: '/'
    },
    {
        text: 'Users',
        icon: (<AccountCircle />),
        path: '/users'
    },
    {
        text: 'Profile',
        icon: (<AccountCircle />),
        path: '/profile'
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

const PermanentSideNav = ({ history, open, location, handlePermanentSideNavOpen}) => {
    const classes = useStyles();
    // console.log(history)
    const [isOpen, setIsOpen] = useState(open);

    const handleMouseEnter = () => {
        handlePermanentSideNavOpen(true)
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        handlePermanentSideNavOpen(false)
        setIsOpen(false);
    };

    const handleLogout = () => {
        AuthServ.logout();
        history.push('/login')
    };


    return (

        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: isOpen,
                [classes.drawerClose]: !isOpen,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                }),
            }}
            open={isOpen}
            onMouseEnter={!open && handleMouseEnter}
            onMouseLeave={!open && handleMouseLeave}
        >
            <div className={classes.toolbar}>

            </div>
            <Divider />

            <MenuList>
                {routes.map((x, id) => {
                    return (
                        <MenuItem key={id} component={Link} to={x.path} selected={x.path === location.pathname}>
                            <ListItemIcon>{x.icon}</ListItemIcon>
                            <Typography>{x.text}</Typography>
                        </MenuItem>
                    )
                })}
            </MenuList>
            {
                AuthServ.isLoggedIn ? (<MenuList>
                    <MenuItem component={Button} onClick={handleLogout} >
                        <ListItemIcon><PowerSettingsNew /></ListItemIcon>
                        <Typography>Logout</Typography>
                    </MenuItem>
                </MenuList>) : ''
            }
        </Drawer>

    );
}

export default withRouter(PermanentSideNav);

