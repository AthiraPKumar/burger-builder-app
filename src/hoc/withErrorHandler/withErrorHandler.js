// on halt for now...will get back soon

import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxi from '../Auxi';
// import axios from  '../../axios-orders';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{

        state = {
            error: null
        }
        // componentDidMount(){
        //     axios.interceptors.request.use(null, error => {
        //         this.setState({error : null})
        //     })

        //     axios.interceptors.response.use(null, error => {
        //         this.setState({error : error})
        //     })
        // }
        render () {
            return(
                <Auxi>
                    <Modal>
                    </Modal>
                <WrappedComponent/>
                </Auxi>
            );
        }
    } 
}

export default withErrorHandler;