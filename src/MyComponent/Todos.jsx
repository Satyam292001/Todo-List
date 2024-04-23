import React from 'react'
import './Modos.css';
import TodoItem from '../MyComponent/TodoItem';

const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"10px auto",
  }
  return (  
    <div className="Container my-3" style={myStyle}>
      <h3 claasName="my-3">Todos List</h3><br/>
      {props.todos.length===0 ?<h2>No Todos to display</h2>:
       props.todos.map((todo)=>{
        return(
        <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
        </>
        );
      })
    }
      

    </div>
  )
}
export default Todos;
