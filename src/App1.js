import React, { Component } from "react";
import classes from "./App.css";  // use classes after applying css loader
// import Radium, {StyleRoot} from 'radium';
import PersonsList from './components/PersonsList/PersonsList';
import Validation from './components/ValidationComponent/ValidationComponent';
import Char from './Char/Char';

class App1 extends Component {

  state = {
    persons: [
      {
        id:'xyz',
        name: 'Max', 
        age: '28'
      },
      {
        id:'abc',
        name: 'Athira', 
        age: '25'
      },
      {
        id:'uvw',
        name: 'Pia', 
        age: '39'
      }
    ],
    showPersons:false,
    userInput: ''
  }

  switchHandler = (Newname) => {
    this.setState({
      persons: [ {
        name: Newname, 
        age: '25'
      },
      {
        name: 'Athira', 
        age: '25'
      },
      {
        name: 'Piyali', 
        age: '39'
      }
    ]
    })
    console.log('handler clicked');
  }

  inputChangeHandler = (event) => {
    this.setState({userInput : event.target.value});
  }


  deleteCharHandler = (index) => {
    let text = this.state.userInput.split('');  // since the userinput is empty use split.
    text.splice(index, 1);
    let updatedText = text.join('');
    this.setState({userInput : updatedText});
  }

  namechangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // we get an event object here
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons2 = [...this.state.persons];
    persons2[personIndex] = person;
    this.setState({persons: persons2});
  }

  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    // const persons1 = this.state.persons.slice();   -- an alternative for the spread operator
    // always use a spread operator so that the original value in the array is not lost.

    const persons1 = [...this.state.persons];
    persons1.splice(index,1);
    this.setState({persons: persons1})
  }

  render() {
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char character={ch} key={index} click={() => this.deleteCharHandler(index)}/>;
    });

    const inputStyle = {
      backgroundColor:'red',
      color:'#fff',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    const stylebutton = {
      marginRight:'8px'
    }

    let persons1 = null;

    if(this.state.showPersons){
      persons1 = (
      <div>
       <PersonsList persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.namechangeHandler} />
      </div>
      );

      inputStyle.backgroundColor='green';
 
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.orange);     // classes=['red'];
    }if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);       // classes=['red', 'bold'];
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
            <h1>Hello World</h1>
            <p className={assignedClasses.join(' ')}>Its working</p>
            <button onClick={this.togglePersonsHandler} style={stylebutton}>switch2</button>
            <button style={inputStyle} onClick={this.togglePersonsHandler}>Switch</button>
            {persons1}  
        <br/>
          <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          {charList}
      </div>  
      // </StyleRoot>  
    );
  }
}

export default App1;
