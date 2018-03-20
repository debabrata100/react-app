import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {

  constructor(){
      super();
      this.state = {
        persons: [
          {id:"dada1",name: 'Max',age:10},
          {id:"ss3",name: 'Deb',age:20},
          {id:"fa33",name: 'Manu',age:30}
        ],
        otherState: "dasfasfkas,fasf",
        showPersons: false,
        toggleClicked:0
      }
      console.log("Inside [App.js] Constructor");
  }
  componentWillMount(){
    console.log("Inside [App.js] componentWillMount");
  }
  componentDidMount(){
    console.log("Inside [App.js] componentDidMount");
  }
  componentWillUnmount(){
    console.log("Inside [App.js] componentWillUnmount");
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("  [Update App.js] in shouldComponentUpdate",nextProps,nextState);
  //     return nextState.persons !== this.state.persons ||
  //           nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate(nextProps,nextState){
    console.log("  [Update App.js] inside componentWillUpdate ",nextProps,nextState);
  }
  componentDidUpdate(){
    console.log(" [Update App.js] inside componentDidUpdate");
  }
  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons})
  };
  nameChangeHandler = (event,id) =>{
      const personIndex = this.state.persons.findIndex(p=>{
          return p.id === id;
      });
      const person = {
        ...this.state.persons[personIndex]
      };
      person.name = event.target.value;
      const persons = [...this.state.persons]
      persons[personIndex] = person;
      this.setState( {persons: persons} );
  }
  togglePersonsHandler = () =>{
      console.log(classes);
      const doesShow = this.state.showPersons;
      this.setState((prevState,props)=>{
          return {
            showPersons: !doesShow,
            toggleClicked: prevState.toggleClicked+1
          }
      });
  }

  render() {
    console.log("Inside [App.js] Render");
    let persons = null;

    if(this.state.showPersons){
        persons =<div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
        </div>;

    }
    return (
            <Aux>
              <button onClick={()=>this.setState({showPersons:true})}>Show Persons</button>
              <Cockpit
                appTitle={this.props.title}
                persons={this.state.persons}
                showPersons={this.state.showPersons}
                clicked={this.togglePersonsHandler}
               />
              {persons}
            </Aux>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'h1','Hi I\'m React App'))
  }
}

export default withClass(App,classes.App);
