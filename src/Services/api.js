import axios from "axios";

const BASE_URL = "https://6201c621b8735d00174cb5a1.mockapi.io/title/";

export const createToDo = async (title, date, priority, isCompleted) => {
  return axios.post(BASE_URL, {
    title: title,
    date: date,
    priority: priority,
    isCompleted: isCompleted
  }).then(res => console.log(res));
}

export const getToDo = async () => {
  return axios.get(BASE_URL);
}

export const deleteToDo = async (id) => {
  console.log("deletando")
  return axios.delete(`${BASE_URL}${id}`)
}
