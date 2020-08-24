import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
import Auxi from '../../../hoc/Auxi';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckOutSummary}>
            {/* <Auxi> */}
            <h1>We hope it tastes well...!!</h1>
            <div style={{width: '100%', margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clickButtonModal={props.cancelModal}>Cancel</Button>
            <Button clickButtonModal={props.continueModal}>Continue</Button>
            {/* </Auxi> */}
        </div>
    )
}

export default checkoutSummary;