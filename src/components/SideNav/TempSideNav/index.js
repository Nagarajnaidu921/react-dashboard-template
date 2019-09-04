import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';



const TempSideNav = (props) => {
    const theme = useTheme();
    

    return (
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.open}
            onClose={props.onClose}
            classes={props.classes}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            hi
          </Drawer>
        </Hidden>
    );
}

export default TempSideNav;