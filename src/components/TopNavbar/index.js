import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle } from '@material-ui/icons';
import { Menu, MenuItem, ListItemIcon } from '@material-ui/core'
import { Hidden } from '@material-ui/core';


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
    },


}));

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
                className={classes.appBar}
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