import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskProvider";
import Task from "./Task";

const ReadTasks = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      <h6>ReadTasks</h6>
      {tasks.map((task) => {
        return <Task key={task.div} task={task}>{task.name}</Task>;
      })}
      <Link to={`/create`}>
        <button>Create Task</button>
      </Link>
    </div>
  );
};

export default ReadTasks;
