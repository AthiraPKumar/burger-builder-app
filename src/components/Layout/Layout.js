import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';


// this is a functional component

const Layout = ( props ) => (
    <Aux>
        <div>Toolbar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>

)

export default Layout;