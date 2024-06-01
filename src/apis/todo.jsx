import axios from "axios";
const URL = "http://localhost:3000";

export const createTodo = async (title, description) => {
  try {
    const payload = { title };
    if (description) {
      payload.description = description;
    }
    const response = await axios.post(`${URL}/createTask`, payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getPendingTodos = async () => {
  try {
    const response = await axios.get(`${URL}/tasks/pending`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getInProgressTodos = async () => {
  try {
    const response = await axios.get(`${URL}/tasks/in-progress`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getCompletedTodos = async () => {
  try {
    const response = await axios.get(`${URL}/tasks/completed`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const updateTodoStatus = async (id, status) => {
  try {
    const response = await axios.put(`${URL}/tasks/${id}`, {
      status,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchTodos = async (type) => {
  try {
    switch (type) {
      case "pending":
        await getPendingTodos();
        break;
      case "in-progress":
        await getInProgressTodos();
        break;
      case "completed":
        await getCompletedTodos();
        break;
      default:
        throw new Error("Invalid type");
    }
  } catch (error) {
    console.error(error.message);
  }
};
