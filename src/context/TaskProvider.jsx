import React, { createContext, useEffect, useState } from "react";
export const TaskContext = createContext(null);


const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("crud-13-tasks")) || [];
    setTasks(savedTasks);
  });
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
