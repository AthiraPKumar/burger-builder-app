import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('[OrderSummary] willUpdate');
    }


    render()  {    
    let ingredientSummary = Object.keys(this.props.ingredients)
    .map(ingridKey => {
        return (
        <li key={ingridKey}>
            <span style={{textTransform: 'capitalize'}}>{ingridKey}: </span>
            {this.props.ingredients[ingridKey]}
        </li>
        )
    });
  
        return (
            <Auxi>
                <h3>Your order</h3>
                <p>A delicious burger with the following Ingredients:</p>
                <ul>
                    <li>{ingredientSummary}</li>
                </ul>
        <p>Toatl Price: <strong>{this.props.tPrice} Rs</strong></p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" clickButtonModal={this.props.closeModal}>CANCEL</Button>
                <Button btnType="Success" clickButtonModal={this.props.continueModal}>CONTINUE</Button>
            </Auxi>
        );
    }
}


export default OrderSummary;