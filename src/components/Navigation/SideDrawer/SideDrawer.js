import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';


// this will be visible only on small devices..


const sideDrawer = (props) => {
    return(
        <Auxi>
            <Backdrop/>
            <div className={classes.SideDrawer}>
                <Logo/>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Auxi>
    );
};

export default sideDrawer;