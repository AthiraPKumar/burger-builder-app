import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';

// this is not class based component, its a stateless component
// 2 way data-binding shows us how to handle inputs.
// onchange is we listen to changes & output the name as value of input

const Person = (props) => {
    // const style={
    //     '@media (min-width:500px)': {
    //         width:'450px'
    //     }
    // }
 return (
    <div className={classes.Person}>
        <p onClick={props.click}>i am {props.name} and my age is {props.age}</p>
        <input type="text" onChange={props.changed}  value={props.name}/>
    </div>
 )
}

export default Person;