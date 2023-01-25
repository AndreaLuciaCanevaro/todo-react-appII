import styles from "../style.module.css";
import React from 'react';

export default function Todo({ todoItem, todoList, setTodoList }) {
  /*here we take the todoList which has all the items, we filter it to look to each item, then we check the id of every item and compare this id to the id of the current element. All the elements who's id does not match with the current element, we place them in the todoList and we filter that single id... */
  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}>{todoItem.name}</h3>
        <button onClick={deleteTodo} className={styles.deletebutton}>
          Done
        </button>
      </div>
    </div>
  );
}
