import React from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';



// this is a functional component

const Layout = ( props ) => (
    <Auxi>
        <Toolbar></Toolbar>
        <SideDrawer/>
        <main className={classes.Content}>
        <h2 className={classes.TitleName}>The Burger App</h2>
            {props.children}
        </main>
    </Auxi>

)

export default Layout;