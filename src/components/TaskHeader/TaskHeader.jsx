import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let totalTask = tasks.length;
  let uc = tasks.filter((e) => {

    return e.done !== true;
  })
  let unCompletedTask = uc.length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h2>TODO'S</h2>
      <b data-testid="header-remaining-task"> There are{unCompletedTask} of </b>
      <b data-testid="header-total-task">{totalTask} Task remaining</b>
    </div>
  );
};

export default TaskHeader;
