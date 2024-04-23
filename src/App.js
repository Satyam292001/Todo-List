import './App.css';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import AddTodo from './MyComponent/AddTodo';
import React,{useState ,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }
  
  const onDelete=(todo)=>{
    console.log("I am onDelete of todo",todo);
    // let index=todos.indexOf(todo);   todos.splice(index,1)   Deleting this way in react does not work 

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));

  }
  
  const addTodo= (title,desc)=>{
    console.log("I Am Adding this todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
       sno=todos[todos.length-1].sno+1;
    }
  const myTodo={
    sno:sno,
    title:title,
    desc:desc,
  }
  setTodos([...todos,myTodo]);  
  console.log(myTodo);
 
  }

  const [todos,setTodos]=useState(initTodo);
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])

  return (
  <>
    <Header title="" searchBar={true} />
    <AddTodo addTodo={addTodo }/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
  
  </>
  );
}

export default App;

