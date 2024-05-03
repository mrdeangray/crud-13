import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TaskContext } from "../context/TaskProvider";
import { v4 as uuid } from "uuid";

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 10px;
`;

const Msg = styled.p`
  color: blue;
  font-size: 30px;
`;

const CreateTask = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {};
    newTask.id = uuid();
    newTask.score = 0;
    newTask.name = inputValue;
    const newTasks = [...tasks, newTask];
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
      <h6>CreateTask</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus />
      </form>
      {tasks?.map((task) => {
        return <span key={task.id}>{task.name}, </span>;
      })}
      {isUpdating && <Msg>Creating...</Msg>}
    </div>
  );
};

export default CreateTask;
