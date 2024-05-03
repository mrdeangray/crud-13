import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { TaskContext } from "../context/TaskProvider";

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 10px;
`;

const Msg = styled.p`
  color: blue;
  font-size: 30px;
`;

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const [currTask, setCurrTask] = useState({});

  useEffect(() => {
    const foundTask = tasks.find((task) => task.id === id);
    setCurrTask(foundTask);
    setInputValue(foundTask.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.name = inputValue;
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem("crud-13-tasks", JSON.stringify(newTasks));
    setInputValue("");
    setIsUpdating(true);
    setTimeout(() => {
      navigate(`/`);
      setIsUpdating(false);
    }, 2000);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>UpdateTask {currTask.name}</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus />
      </form>
      {tasks?.map((task) => {
        return <span key={task.id}>{task.name}, </span>;
      })}
      {isUpdating && <Msg>Updating...</Msg>}
    </div>
  );
};

export default UpdateTask;
