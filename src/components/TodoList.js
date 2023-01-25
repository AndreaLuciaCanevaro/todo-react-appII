import React from 'react'
import Todo from "./Todo";

/*destructuring props using curly brackets and puting todoList inside */
const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo
          setTodoList={setTodoList}
          key={todoItem.id}
          todoItem={todoItem}
          todoList={todoList}
        ></Todo>
      ))}
    </div>
  );
};
export default TodoList;
