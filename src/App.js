import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"dada1",name: 'Max',age:10},
      {id:"ss3",name: 'Deb',age:20},
      {id:"fa33",name: 'Manu',age:30}
    ],
    otherState: "dasfasfkas,fasf",
    showPersons: false
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
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
        backgroundColor: 'green',
        color: '#fff',
        border: '1px solid blue',
        font: 'inherit',
        padding:'8px',
        cursor:'pointer'
    };
    let persons = null;
    if(this.state.showPersons){
        persons = (
          <div >
            {this.state.persons.map((person,index)=>{
                return <Person
                  click={()=>this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event)=>this.nameChangeHandler(event,person.id)}
                />
            })}
          </div>
        );
        style.backgroundColor = 'red';
    }
    const classes = [];
    if(this.state.persons.length <= 2){
        classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (

          <div className="App">
            <h1>Hi I am rect app</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button
              style={style}
              onClick={this.togglePersonsHandler}>Toggle Persons</button><div >
                </div>
                {persons}
          </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'h1','Hi I\'m React App'))
  }
}

export default App;
