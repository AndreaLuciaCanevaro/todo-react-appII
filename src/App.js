import React from 'react';
import { useState } from "react";
import ApiFetch from "./components/ApiFetch";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  /* to pass the 'todo' items to the Form we have to pass them as props (properties) todo=(todo), setTodo={setTodo}, etc */
  const [todo,setTodo]=useState('');
  const [todoList,setTodoList]=useState([]);
  
  return (
    <div className="App">
      <Header/>
      <Form 
        todo={todo} 
        setTodo={setTodo} 
        todoList={todoList} 
        setTodoList={setTodoList}>
      </Form>
      <TodoList 
        setTodoList={setTodoList} 
        todoList={todoList}>
      </TodoList>
      <ApiFetch/>
    </div>
  );
}

export default App;
