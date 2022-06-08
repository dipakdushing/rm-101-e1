import React from "react";
import data from "../data/tasks.json"
import styles from "./taskApp.module.css";
import AddTask from "../components/AddTask/AddTask"
import TaskHeader from "./TaskHeader/TaskHeader"
import Tasks from "./Tasks/Tasks"
import { useState } from "react";
const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [taskData, setTaskdata] = useState(data)

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}

      <TaskHeader tasks={taskData} />

      {/* Add Task */<AddTask func={setTaskdata} tasks={taskData} />}
      {/* Tasks */<Tasks tasks={taskData} fun={setTaskdata} />}
    </div>
  );
};

export default TaskApp;
