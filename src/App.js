import { Route, Routes } from "react-router-dom";
import "./App.css";
import TaskProvider from "./context/TaskProvider";
import CreateTask from "./components/CreateTask";
import ReadTasks from "./components/ReadTasks";
import UpdateTask from "./components/UpdateTask";
import DeleteTask from "./components/DeleteTask";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Routes>
          <Route exact path="/" element={<ReadTasks />} />
          <Route exact path="/create" element={<CreateTask />} />
          <Route exact path="/update/:id" element={<UpdateTask />} />
          <Route exact path="/delete/:id" element={<DeleteTask />} />
        </Routes>
      </TaskProvider>
    </div>
  );
}

export default App;
