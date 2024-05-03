import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid green;
  border-radius: 4px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Task = ({ task }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    getScore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getScore = async () => {
    const { data } = await axios(`https://api.github.com/users/${task.name}`);
    setScore(data.public_repos);
  };

  return (
    <Box>
      <span>{task.name}</span>
      <span>Score: {score}</span>
      <Link to={`/update/${task.id}`}>Update</Link>
      <Link to={`/delete/${task.id}`}>Delete</Link>
    </Box>
  );
};

export default Task;
