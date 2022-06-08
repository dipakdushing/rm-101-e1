import React, { useState } from "react";

import styles from "./addTask.module.css";

const AddTask = ({ fun, tasks }) => {
  // NOTE: do not delete `data-testid` key value pair


  const [text, setText] = useState({
    id: null,
    text: "",
    done: false,
    count: 0,
  })

  const uptext = (value) => {
    setText({
      ...text,
      text: value
    })


  }

  return (
    <div className={styles.todoForm}>
      <input onChange={(e) => uptext(e.target.value)} data-testid="add-task-input" type="text" />
      <button onClick={(() => {
        setText({
          ...text,
          id: tasks.length + 1
        })
        fun([...tasks, text])
      })} data-testid="add-task-button"><b>Add</b></button>
    </div>
  );
};

export default AddTask;
