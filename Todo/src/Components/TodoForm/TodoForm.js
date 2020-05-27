import React from 'react';
import classes from './TodoForm.css'

const TodoForm = (props) => {
  let todos=(
    props.todos.map(todo=>{
      return(  
        <div>
          <ul key={todo.id}>
          <li>{todo.task}</li>
          </ul>
        
        </div>
        )
   }  )

  )
    return (
        <div className={classes.Todoform}>
        <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 style={{color:"white"}}>TODO</h2>
          <div className={classes.main}>
            <form onSubmit={props.submit}>
              <input type="text" placeholder="Add todo" onChange={props.change} />
              <button onClick={props.click}>Add</button>
                          {todos}
          
            </form>
           
            
           
          </div>
        </div>
      </div>
      </div>
    );
};

export default TodoForm;