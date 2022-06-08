import React from "react";
import styles from "./counter.module.css";

const Counter = ({ task, tasks, up }) => {

  // sample value to be replaced

  // NOTE: do not delete `data-testid` key value pair
  const updatingC = (value) => {

    for (var j = 0; j < tasks.length; j++) {

      if (tasks[j].id === task.id) {

        if (tasks[j].count > 0) {

          let ans = [...tasks]
          ans[j].count += value
          return up(ans)
        }

      }
    }


  }
  return (
    <div className={styles.counter}>
      <button onClick={() => updatingC(1)} data-testid="task-counter-increment-button"><b>+</b></button>
      <span data-testid="task-counter-value">{task.count}</span>
      <button onClick={() => updatingC(-1)} data-testid="task-counter-decrement-button"><b>-</b></button>
    </div>
  );
};

export default Counter;
