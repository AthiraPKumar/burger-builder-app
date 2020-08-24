import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';


class ContactData extends Component {
    state ={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading : false
    }

    orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);


    this.setState({loading : true})
        const orderItems = {
            ingredients: this.state.ingredients,
            totalprice: this.props.price,
            customer: {
                name: 'Athira Kumar',
                address: {
                    street: 'testStreet',
                    city: 'Ponda',
                    state: 'Goa'
                },
                email: 'test@gmail.com',
            },
            deliveryMethod: 'fastest'
        }

       axios.post('/orders.json', orderItems)
       .then(response => {
        this.setState({loading : false});
        // purchasing: false , coz we need to close the modal window
        console.log(response, ' R1')
       })
       .catch(error => {
        this.setState({loading : false});
        console.log(error, 'e1')
       })



    }

    render(){
        return(

            <div className={classes.ContactData}>
                <h4>ENTER YOUR CONTACT DETAILS</h4>
                <form>
                    <input type="text" name='name' placeholder="enter your name"/>
                    <input type="text" name='email' placeholder="enter your email"/>
                    <input type="text" name='street' placeholder="street"/>
                    <input type="text" name='postal' placeholder="postal"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
