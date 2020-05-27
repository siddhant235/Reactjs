import React from 'react';
import TodoForm from '../TodoForm/TodoForm';



const TodoItem = (props) =>{
    
 return  props.todos.map(todo=>{
    //   return( <div>
    //  <ul>
    //   <li>{todo.task}</li>
    //  </ul>
    //   </div>)
    return <TodoForm todo={todo.task}/>
  })
}




export default TodoItem;