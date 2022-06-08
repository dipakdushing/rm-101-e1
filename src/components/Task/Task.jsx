import React from "react";
import styles from "./task.module.css";
import ClearIcon from '@mui/icons-material/Clear';
import Counter from "../Counter/Counter";

const Task = ({ task, tasks, update }) => {
  // NOTE: do not delete `data-testid` key value pair

  const changetasks = () => {

    let n = task.length
    for (var i = 0; i < n; i++) {
      if (tasks[i].id === task.id) {
        let result = [...tasks]
        result.splice(i, 1)

        return update(result)

      }
    }
  }

  const upDone = () => {
    let result = [...tasks]
    for (var i = 0; i < result.length; i++) {
      if (result[i].id === task.id) {
        result[i].done = !result[i].done

        return update(result)

      }
    }

  }
  return (
    <li data-testid="task" className={styles.task}>
      {task.done === true ? <input onChange={() => upDone()} type="checkbox" data-testid="task-checkbox" checked /> : <input onChange={() => upDone()} type="checkbox" data-testid="task-checkbox" />}
      {task.done === true ? <div data-testid="task-text">{task.text}</div> : <div data-testid="task-text">{task.text}</div>}
      {/* Counter here */<Counter task={task} tasks={tasks} up={update} />}
      <button onClick={() => changetasks()} data-testid="task-remove-button"> Remove</button>
    </li>
  );
};

export default Task;
