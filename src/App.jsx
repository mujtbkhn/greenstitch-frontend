import React, { useEffect, useState } from "react";
import Completed from "./components/Completed";
import CreateTodo from "./components/CreateTodo";
import InProgress from "./components/InProgress";
import Pending from "./components/Pending";
import {
  getPendingTodos,
  getInProgressTodos,
  getCompletedTodos,
  updateTodoStatus,
} from "./apis/todo";

function App() {
  const [pendingTodos, setPendingTodos] = useState([]);
  const [inProgressTodos, setInProgressTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  //fetching all sections 

  //pending todos 
  const fetchPendingTodos = async () => {
    try {
      const pending = await getPendingTodos();
      setPendingTodos(pending);
    } catch (error) {
      console.error(error.message);
    }
  };

  //in-progress todos
  const fetchInProgressTodos = async () => {
    try {
      const inProgress = await getInProgressTodos();
      setInProgressTodos(inProgress);
    } catch (error) {
      console.error(error.message);
    }
  };

  //completed todos
  const fetchCompletedTodos = async () => {
    try {
      const completed = await getCompletedTodos();
      setCompletedTodos(completed);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchPendingTodos();
    fetchInProgressTodos();
    fetchCompletedTodos();
  }, []);

  //re-rendering the section which gets updated status
  const handleTodoUpdate = async (id, status) => {
    try {
      await updateTodoStatus(id, status);
      if (status === "Pending") {
        fetchPendingTodos();
      } else if (status === "In Progress") {
        fetchInProgressTodos();
      } else if (status === "Completed") {
        fetchCompletedTodos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-white bg-[#032541]">
      <h1 className="flex justify-center font-semibold text-3xl pt-5">
        Dynamic TODO-Application
      </h1>
      <div className="flex gap-4 justify-center p-10">
        <CreateTodo onCreate={fetchPendingTodos} />
        <Pending
          todos={pendingTodos}
          onUpdate={handleTodoUpdate}
          setPendingTodos={setPendingTodos}
        />
        <InProgress
          todos={inProgressTodos}
          onUpdate={handleTodoUpdate}
          setInProgressTodos={setInProgressTodos}
        />
        <Completed
          todos={completedTodos}
          onUpdate={handleTodoUpdate}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </div>
  );
}

export default App;
