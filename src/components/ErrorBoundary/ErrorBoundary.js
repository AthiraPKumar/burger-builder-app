import React, {Component} from 'react';

// use this only when you know your code will fail, otherwise dont use it, failures which you cannot control.

class ErrorBoundary extends Component{

    state = {
        hasError:false,
        ErrorMessage: ''
    }

    componentDidCatch = (error,info) => {
        this.setState({hasError:true, ErrorMessage:error});
    }


    render(){
        if(this.state.hasError){
            return <h1>Something Went Wrong...!!!</h1>
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;