import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props)=>{
  let btnClass = null;
    if(props.showPersons){
      btnClass = [classes.Button,classes.Red].join(' ');
    }
  const AssignedClasses = [];
  if(props.persons.length <= 2){
      AssignedClasses.push(classes.red);
  }
  if(props.persons.length <=1){
    AssignedClasses.push(classes.bold);
  }

  return (
    <Aux >
      <h1>{props.appTitle}</h1>
      <p className={AssignedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};
export default cockpit;
