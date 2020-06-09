import React, { Component } from "react";
// import classes from "./App.css";  // use classes after applying css loader
// import Char from './Char/Char';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {



  render() {
 

    return (
      // <StyleRoot>
      <div>
        <h1>Hello Burger App</h1>
        <Layout>
            <BurgerBuilder/>
        </Layout>
      </div>  
    );
  }
}

export default App;
