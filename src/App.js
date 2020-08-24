import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
// import classes from "./App.css";  // use classes after applying css loader
// import Char from './Char/Char';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {



  render() {
    return (
      // <StyleRoot>
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder}/>
            <Route path="/checkout" component={Checkout}/>
          </Switch>
        </Layout>
      </div>  
    );
  }
}

export default App;
