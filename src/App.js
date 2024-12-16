
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import TodoItem from "./MyComponents/TodoItem";
import React, { useState } from 'react';


function App() {
  const onDelete= (todo) =>{
    console.log("i am onDelete of todo",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title,desc) =>{
    console.log("i am adding this todo",title,desc)
    let sno = todos[todos.length-1].sno + 1;
    const myTodo ={
      title: title,
      desc: desc,
      sno:sno,
    }
    setTodos([...todos,myTodo])
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
   {
      sno: 1,
      title: "go to the some place1",
      desc:"you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "go to the some place2",
      desc:"you need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "go to the some place3",
      desc:"you need to go to the market to get this job done3"
    },
  ]);

  
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
} 

export default App;
