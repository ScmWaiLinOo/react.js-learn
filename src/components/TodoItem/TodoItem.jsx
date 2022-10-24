import React, { useState, Fragment, useEffect } from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({ title, id, deleteTodo, updateTodo }) => {
  const [editTitle, setEditTitle] = useState(title);
  const [show, setshow] = useState(false);
  let element = title;
  useEffect(() => console.log("mounted and updated"), []);
  const handleUpdate = () => {
    setshow(false);
    updateTodo({ id, title: editTitle });
  };
  if (show) {
    element = (
      <React.Fragment>
        <input
          type="text"
          name="editTitle"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </React.Fragment>
    );
  }
  return (
    <li className={classes.todoitem}>
      <span>{element}</span>
      <button onClick={deleteTodo.bind(this, id)} className={classes.crossX}>
        X
      </button>
      <button style={{ float: "right" }} onClick={(e) => setshow(!show)}>
        Edit
      </button>
    </li>
  );
};
export default TodoItem;
