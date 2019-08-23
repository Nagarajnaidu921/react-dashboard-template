import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, PowerSettingsNew } from '@material-ui/icons';
import { Menu, MenuItem, MenuList, ListItemIcon } from '@material-ui/core'
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

}));

// const profileMenu = (props) => {

//     return ();
// }

const TopNavbar = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    function openMenu(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function closeMenu() {
      setAnchorEl(null);
    }

    
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
                            aria-controls="simple-menu"
                            aria-haspopup="true" 
                            onClick={openMenu}
                        >

                            <AccountCircle />

                        </IconButton>
                    </Hidden>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                    >
                       
                        <MenuItem onClick={closeMenu}>
                            <ListItemIcon><AccountCircle /></ListItemIcon>
                            <Typography>Edit Propfile</Typography>
                        </MenuItem>
                        <MenuItem onClick={closeMenu}>My account</MenuItem>
                        <MenuItem onClick={closeMenu}>Logout</MenuItem>
                    </Menu>
                </Toolbar>

            </AppBar>

        </div>

    );
}

export default TopNavbar;