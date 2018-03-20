import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    constructor(props){
        super(props);
        console.log("Inside [Persons.js] constructor");
    }
    componentWillMount(){
      console.log("Inside [Persons.js] componentWillMount");
    }
    componentDidMount(){
      console.log("Inside [Persons.js] componentDidMount");
    }
    componentWillUnmount(){
      console.log("Inside [Persons.js] componentWillUnmount");
    }
    componentWillReceiveProps(nextProps){
      console.log("  [Update Persons.js] in componentWillReceiveProps");
    }
    // shouldComponentUpdate(nextProps,nextState){
    //   console.log("  [Update Persons.js] in shouldComponentUpdate",nextProps,nextState);
    //   // console.log("nextProps:",nextProps.persons);
    //   // console.log("this.props:",this.props.persons);
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }
    componentWillUpdate(nextProps,nextState){
      console.log("  [Update Persons.js] inside componentWillUpdate ",nextProps,nextState);
    }
    componentDidUpdate(){
      console.log(" [Update Persons.js] inside componentDidUpdate");
    }
    render(){
        console.log("Inside [Persons.js] Render()");
        return this.props.persons.map((person,index)=>{
              return <Person
                click={()=>this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event)=>this.props.changed(event,person.id)}
              />
          });
    }
}
export default Persons;
