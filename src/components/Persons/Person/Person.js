import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component{
  constructor(){
    super();
    console.log("Inside [Person.js] constructor");
  }
  componentWillMount(){
    console.log("Inside [Person.js] componentWillMount");
  }
  componentDidMount(){
    console.log("Inside [Person.js] componentDidMount");
  }
  componentWillUnmount(){
    console.log("Inside [Person.js] componentWillUnmount");
  }
    render(){
      console.log("Inside [Person.js] render");
      return (
        <Aux  >
          <p onClick={this.props.click}>I am {this.props.name} nad {this.props.age} years old</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name}></input>
        </Aux>
       );
    }
}
export default withClass(Person,classes.Person);