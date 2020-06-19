import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button className={[classes.Button, classes[props.btnType]].join('')} 
    onClick={props.clickButtonModal}>
        {props.children}
    </button>
);

// this is our own button component

export default button;