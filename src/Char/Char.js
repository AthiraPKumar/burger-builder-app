import React from 'react';

const Char = (props) => {

    let style = {
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        border:'1px solid black',
        textAlign:'center'
    }

    return(
        <div style={style} onClick={props.click}>
            {props.character}
        </div>
    )

} 

export default Char;