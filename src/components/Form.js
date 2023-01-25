import React from 'react'
import shortid from "shortid";
import styles from "../style.module.css";
/*we use curly brackets to destructure the props and just write todo, setTodo and so on */
export default function Form({ todo, setTodo, todoList, setTodoList }) {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    /*prevents the default behaviour of page refresh */
    event.preventDefault();
    /*temporary Array, todo Array for any input "todo" that is entered in the todoList*/
    /*let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);*/
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    /*to clear the input field once it's used*/
    setTodo("");
    console.log(todoList);
  };

  return (
    <div className={styles.todoform}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoinput}
          placeholder="Add To Do Item"
        ></input>
        <button type="submit" className={styles.todobutton}>
          Add
        </button>
      </form>
    </div>
  );
}
