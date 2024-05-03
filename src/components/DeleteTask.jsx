import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { TaskContext } from "../context/TaskProvider";



const Msg = styled.p`
  color: blue;
  font-size: 30px;
`;

const DeleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { tasks, setTasks } = useContext(TaskContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const [currTask, setCurrTask] = useState({});

  useEffect(() => {
    const foundTask = tasks.find((task) => task.id === id);
    setCurrTask(foundTask);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleDelete = (event) => {
    event.preventDefault();

    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("crud-13-tasks", JSON.stringify(newTasks));
    setIsUpdating(true);
    setTimeout(() => {
      navigate(`/`);
      setIsUpdating(false);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>UpdateTask {currTask.name}</h6>
      <button onClick={handleDelete}>Delete: {currTask?.name}</button>
      <div>
        {tasks?.map((task) => {
          return <span key={task.id}>{task.name}, </span>;
        })}
      </div>
      {isUpdating && <Msg>Deleting...</Msg>}
    </div>
  );
};

export default DeleteTask;
