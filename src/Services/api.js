import axios from "axios";

const BASE_URL = "https://6201c621b8735d00174cb5a1.mockapi.io/title/";

export const createToDo = async (toDoData) => {
  return axios.post(BASE_URL, {
    title: toDoData.title,
    description: toDoData.description,
    dueDate: toDoData.dueDate,
    done: toDoData.done,
    tags: toDoData.tags,
  }).then(res => console.log(res));
}

export const getToDo = async () => {
  return axios.get(BASE_URL);
}

export const deleteToDo = async (id) => {
  console.log("deletando")
  return axios.delete(`${BASE_URL}${id}`)
}

export const updateToDo = async (id, title, description, dueDate, done, tags) => {
  console.log("editando")
  return axios.put(`${BASE_URL}${id}`, {
    title: title,
    description: description,
    dueDate: dueDate,
    done: done,
    tags: tags,
  }).then((res) => console.log(res))
}