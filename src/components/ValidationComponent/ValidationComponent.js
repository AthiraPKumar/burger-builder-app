import React from 'react';

const Validation = (props) => {

    let ValidationMessage = 'Text too short'

    if(props.inputLength >= 5){
        ValidationMessage = 'Text too long';
    }
    return(
        <div>
            <p>{ValidationMessage}</p>       
        </div>
    )
}

export default Validation;