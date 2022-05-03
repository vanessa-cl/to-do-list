import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ToDoBoard from "../ToDoBoard/ToDoBoard";
import useToDos from "../../Hooks/useToDos/useToDos";

export default function Main() {
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useState([]);
  const { allToDos } = useToDos();

useEffect(() => {
  setTodos(allToDos.items)
}, [allToDos])

  return (
    <main className="main-area">
      {console.log(todos)}
      <Sidebar setFilter={(filter) => setFilter(filter)} />
      <ToDoBoard todos={todos} filter={filter}/>
    </main>
  )
}
