import React from "react";

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const Todo = ({ data, onUpdate, index }) => {

  //changing the statu
  const handleStatusChange = async (e) => {
    const newStatus = e.target.checked ? "In Progress" : "Pending";
    onUpdate(data._id, newStatus);
  };

  const handleCompletionChange = async (e) => {
    const newStatus = e.target.checked ? "Completed" : "In Progress";
    onUpdate(data._id, newStatus);
  };

  return (
    <div className="p-4 m-4 bg-[#032541] flex justify-start flex-col gap-3 rounded-xl border border-1 border-white text-wrap w-60">
      <h2>
        {index}. {data.title}
      </h2>
      {data.description && <p>{toTitleCase(data.description)}</p>}
      {data.status === "Pending" && (
        <label>
          <input
            type="checkbox"
            name="inProgress"
            onChange={handleStatusChange}
          />{" "}
          In Progress?
        </label>
      )}
      {data.status === "In Progress" && (
        <label>
          <input
            type="checkbox"
            name="completed"
            onChange={handleCompletionChange}
          />{" "}
          Completed?
        </label>
      )}
      {data.status === "Completed" && <h2>{data.timestamp}</h2>}
    </div>
  );
};

export default Todo;
