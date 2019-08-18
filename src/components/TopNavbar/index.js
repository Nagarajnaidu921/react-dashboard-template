import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { PowerSettingsNew } from '@material-ui/icons';

import { Hidden } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

}))

const TopNavbar = (props) => {
    const classes = useStyles();
    // const theme = useTheme();
    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.permanentSideNavOpen,
                })}
            >
                <Toolbar>
                    <Hidden smUp>
                        <IconButton
                            color="inherit"
                            edge="start"
                            aria-label="open drawer"
                            onClick={props.menuOnClick}
                        >

                            <MenuIcon />

                        </IconButton>
                    </Hidden>
                    <Typography className={classes.title} variant="h6" noWrap>
                        BrandName
                    </Typography>
                    <Hidden xsDown>
                        <IconButton
                            color="inherit"
                            edge="end"
                            aria-label="open drawer"
                            onClick={props.menuOnClick}
                        >

                            <PowerSettingsNew />

                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>

        </div>

    );
}

export default TopNavbar;