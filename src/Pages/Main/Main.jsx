import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ToDoBoard from "../../Components/ToDoBoard/ToDoBoard";
import useToDos from "../../Hooks/useToDos/useToDos";

export default function Main() {
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useState([]);
  const { allToDos } = useToDos();

  useEffect(() => {
    setTodos(allToDos.items)
  }, [allToDos])

  return (
    <>
      <Sidebar setFilter={(filter) => setFilter(filter)} />
      <main className="main-area">
        {console.log(todos)}
        <Header></Header>
        <ToDoBoard todos={todos} filter={filter} />
      </main>
    </>
  )
}
