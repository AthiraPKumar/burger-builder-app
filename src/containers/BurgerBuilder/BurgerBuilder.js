import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

// you can manage state only in a class based component 


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}
class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalprice : 4,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseModalClosed = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You Continue');
    }

    updatePurchase(ingredientsArr){
        // convert to an array - when an object is declared convert it to an array of values
        const sum = Object.keys(ingredientsArr)
        .map(igridKey => {
            return ingredientsArr[igridKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalprice: newPrice, ingredients: updateIngredients})
        this.updatePurchase(updateIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalprice: newPrice, ingredients: updateIngredients})
        this.updatePurchase(updateIngredients);
    }

        render(){
            const disableInfo = {
                ...this.state.ingredients
            };
            for(let key in disableInfo){
                disableInfo[key] = disableInfo[key] <= 0
            }
            return(
                <Auxi>
                    <Modal show={this.state.purchasing} closeModal={this.purchaseModalClosed}>
                        <OrderSummary ingredients={this.state.ingredients} 
                        closeModal={this.purchaseModalClosed}
                        continueModal={this.purchaseContinueHandler}
                        tPrice={this.state.totalprice.toFixed(2)}/>
                    </Modal>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientsRemoved={this.removeIngredientHandler}
                    price={this.state.totalprice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    disabled={disableInfo}/>
                </Auxi>
            );
        }
}

export default BurgerBuilder;