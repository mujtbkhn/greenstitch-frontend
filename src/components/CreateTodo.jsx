import React, { useState } from "react";
import { createTodo } from "../apis/todo";

const CreateTodo = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    try {
      await createTodo(title, description);
      setTitle("");
      setDescription("");
      onCreate();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#F0F5F5] rounded-md h-full w-72">
      <h1 className="m-5 text-gray-900 text-2xl font-semibold">CREATE TODO</h1>
      <form onSubmit={handleCreateTodo} className="flex flex-col gap-5 p-4">
        <div className="mx-auto">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="     Your Title"
            onChange={(e) => setTitle(e.target.value)}
            className="bg-[#032541] w-60 h-8 rounded-md text-white"
          />
        </div>
        <div className="mx-auto">
          <input
            type="text"
            name="description"
            value={description}
            placeholder="    Your Description"
            onChange={(e) => setDescription(e.target.value)}
            className="bg-[#032541] w-60 h-8 rounded-md text-white "
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-28 mx-auto rounded"
        >
          CREATE
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
