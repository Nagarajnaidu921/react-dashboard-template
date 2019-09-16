import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideNav from '../SideNav';
import TopNavbar from '../TopNavbar';
import clsx from 'clsx';

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
    const [tempSideNavOpen, setTempSideNavOpen] = React.useState(false);
    const [permanentSideNavOpen, setPermanentSideNavOpen ] =  React.useState(false);
    const handleTempSideNavToggle = () => {
        setTempSideNavOpen(!tempSideNavOpen)
    }

    const handlePermanentSideNavOpen = (isOpen) => {
        setPermanentSideNavOpen(isOpen)
    }


    return (
        <>
            <TopNavbar
                menuOnClick={handleTempSideNavToggle}
            />
            <SideNav
                tempSideNavOpen={tempSideNavOpen}
                handleTempSideNavToggle={handleTempSideNavToggle}
                handlePermanentSideNavOpen={handlePermanentSideNavOpen}
            />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: permanentSideNavOpen
                })}>
                {props.children}
            </main>
        </>
    )
}

export default Layout;