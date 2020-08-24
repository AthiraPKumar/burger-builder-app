import React, { Component } from 'react';
import classes from './Modal.css';
import Auxi from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

// this is a functional component as it does not have any state
// it receives props  returns some jsx

class Modal extends Component{

    // controlling the updating the order summary wrapped by Modal
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.show !== this.props.show || nextProps.children !== this.props.children){
            return true;
        }

        // or 
        // return nextProps.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log('[Modal] willUpdate');
    }

    render(){

        return(
            <Auxi>
                <Backdrop show={this.props.show} clickModal={this.props.closeModal}/>
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxi>
        );
    }
}


export default Modal;