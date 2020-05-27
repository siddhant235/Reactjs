import React, { Component } from 'react';
import classes from  './App.css';
import {v4 as uuidv4} from 'uuid';
import Navigation from '../Components/Navigation/Navigation'
import TodoForm from '../Components/TodoForm/TodoForm'




//import TodoList from '../Components/TodoList/TodoList'

class App extends Component {
  state={
      todos:[],
      items:{task:'',id:null},
      updated:false
  }
  inputHandler=(e)=>{
  this.setState({
    items:{
      task:e.target.value,
      id:uuidv4()
    }
  })
  }
  
submitHandler=(e)=>{
  e.preventDefault();
  e.target.reset();
}
  addHandler=(e)=>{
  
    const newitems=this.state.items;
    if(newitems!==null)
    {
    const todos1=[...this.state.todos,newitems];
    // console.log(todos1)
    this.setState({
      todos:todos1,
      updated:true,
      items:{
        task:'',
        id:''
      }
    })
 
    
  }
  }

  render() {
  //  let tak=null;
    // if(this.state.updated)
    // {

    // if(this.state.updated)
    // <Todoitem todos={this.state.todos} key={todo.id}  />
    
  //  tak=(   this.state.todos.map(todo=>{
  //     return(    <div>
  //         <ul>
  //           <li key={todo.id}>
  //             {todo.task}
  //           </li>
  //         </ul>
  //       </div>
  //     )  
     
  //        }))
          
      
  //   }
    
    
    return (
    
      <div className={classes.App}>
          <Navigation/>
          <TodoForm submit={this.submitHandler}  change={this.inputHandler} click={this.addHandler} todos={this.state.todos} />
         {/* { this.state.updated? <Todoitem  todos={this.state.todos}/>:<p>nothing entered</p>} */}
         {/* <Todoitem  /> */}
         
         
  
       
      </div>
    );
  }
}

export default App;
