import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopNavbar from '../TopNavbar';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: '5vw',
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
      }
}))

const Layout = (props) => {
    
    const classes = useStyles();

    return (
        <>
            <TopNavbar
                menuOnClick={props.handleTempSideNavToggle}
            />
            <main 
            className={classes.content}>
                {props.children}
            </main>
        </>
    )
}

export default Layout;