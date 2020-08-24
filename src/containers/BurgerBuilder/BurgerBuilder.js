import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

// you can manage state only in a class based component 


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}
class BurgerBuilder extends Component{

    state = {
        ingredients: null,
        totalprice : 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount(){
        console.log(this.props,'kkkkk-2')
        // to fetch data use this method
        axios.get('https://burger-builder-app-001.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data})
            console.log('get data');
        })
        .catch(error => {
            console.log(error,'error');
        })
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseModalClosed = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // alert('You Continue');


       // this code is placed in contactData , orderHandler




    //     this.setState({loading : true})
    //     const orderItems = {
    //         ingredients: this.state.ingredients,
    //         totalprice: this.state.totalprice,
    //         customer: {
    //             name: 'Athira Kumar',
    //             address: {
    //                 street: 'testStreet',
    //                 city: 'Ponda',
    //                 state: 'Goa'
    //             },
    //             email: 'test@gmail.com',
    //         },
    //         deliveryMethod: 'fastest'
    //     }

    //    axios.post('/orders.json', orderItems)
    //    .then(response => {
    //     this.setState({loading : false, purchasing: false});
    //     // purchasing: false , coz we need to close the modal window
    //     console.log(response, ' R1')
    //    })
    //    .catch(error => {
    //     this.setState({loading : false});
    //     console.log(error, 'e1')
    //    })

    }

    purchaseContinueHandler1 = () => {
        let queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]))
            // property name = property value
        }
        queryParams.push('price=' + this.state.totalprice);
        const queryString = queryParams.join('&');

        console.log(this.props, 'PPPP');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
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

            let orderSummary = null;
            let burger = <Spinner/>;
            if(this.state.ingredients){   
                burger = (
                    <Auxi>
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

                orderSummary = <OrderSummary ingredients={this.state.ingredients} 
                closeModal={this.purchaseModalClosed}
                continueModal={this.purchaseContinueHandler1}
                tPrice={this.state.totalprice.toFixed(2)}/>
            }
            if(this.state.loading){
                orderSummary = <Spinner/>;
            }

            
            
            return(
                <Auxi>
                    <Modal show={this.state.purchasing} closeModal={this.purchaseModalClosed}>
                        {orderSummary}
                    </Modal>
                   {burger}
                </Auxi>
            );
        }
}

export default BurgerBuilder;