import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ToDoBoard from "../../Components/ToDoBoard/ToDoBoard";
import useToDos from "../../Hooks/useToDos/useToDos";

export default function Main() {
  const [toDoFilter, setToDoFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("");
  const [toDos, setTodos] = useState([]);
  const { allToDos } = useToDos();

  useEffect(() => {
    setTodos(allToDos);
  }, [allToDos])

  const cleanFilters = () => {
    setToDoFilter("all");
    setTagFilter("");
  }

  return (
    <>
      <Sidebar
        toDoFilter={toDoFilter}
        setToDoFilter={(filter) => setToDoFilter(filter)}
        tagFilter={tagFilter}
        setTagFilter={(filter) => setTagFilter(filter)}
        cleanFilters={() => cleanFilters()}
      />
      <main className="main-area">
        {console.log(toDos)}
        <Header></Header>
        <ToDoBoard
          toDos={toDos}
          toDoFilter={toDoFilter}
          tagFilter={tagFilter}
        />
      </main>
    </>
  )
}
