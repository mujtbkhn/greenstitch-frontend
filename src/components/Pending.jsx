import React from "react";
import Todo from "./Todo";
import { Reorder } from "framer-motion";

const Pending = ({ todos, onUpdate, setPendingTodos }) => {
  return (
    <div className="bg-white rounded-md h-full">
      <h1 className="m-5 text-gray-900 text-2xl font-semibold">PENDING</h1>
      <Reorder.Group values={todos} onReorder={setPendingTodos}>
        {todos.map((todo, index) => (
          <Reorder.Item value={todo} key={todo._id}>
            <Todo
              key={todo._id}
              data={todo}
              onUpdate={onUpdate}
              index={index + 1}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default Pending;
