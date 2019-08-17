import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TopNavbar from '../TopNavbar';
import TempSideNav from '../SideNav/TempSideNav';
import PermanentSideNav from '../SideNav/PermanentSideNav';
import { Hidden } from '@material-ui/core';

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
    const [tempSideNavOpen, setTempSideNavOpen] = useState(false);
    const [permanentSideNavOpen, setPermanentSideNavOpen] = useState(false);

    const handleTempSideNavToggle = () => {
        setTempSideNavOpen(!tempSideNavOpen)
    }
    const handlePermanentSideNavToggle = () => {
        setPermanentSideNavOpen(!permanentSideNavOpen);
    }

    return (
        <>
            <TopNavbar
                menuOnClick={handleTempSideNavToggle}
                permanentSideNavOpen={permanentSideNavOpen}
            />
            <nav className={classes.drawer} aria-label="mailbox folders">
                <TempSideNav
                    open={tempSideNavOpen}
                    onClose={handleTempSideNavToggle}
                    classes={{ paper: classes.drawerPaper }}
                />
                <Hidden xsDown>
                    <PermanentSideNav
                        handleMouseEvent={handlePermanentSideNavToggle}
                        open={permanentSideNavOpen}
                    />
                </Hidden>
            </nav>
            <main 
            className={clsx(classes.content, {
                [classes.contentShift]: permanentSideNavOpen,
              })}>
                {props.children}
            </main>
        </>
    )
}

export default Layout;