import { useState } from "react";
import ListItem from "./ListItem";

export default function TodoTest() {
  const [todo, setTodo] = useState("");
  /*We save the todo inside the todoList*/
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    /*prevents the default behaviour of page refresh */
    event.preventDefault();
    /*temporary Array, todo Array for any input "todo" that is entered in the todoList*/
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    console.log(todoList);
    /*to clear the input field once it's used*/
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} type="text" onChange={handleChange}></input>
        <button type="submit">Add</button>
      </form>
      {todoList.map((item) => (
        <ListItem key={item} name={item}></ListItem>
      ))}
    </div>
  );
}
