import React, { useState, useEffect, useCallback } from "react";
import ToDo from "../ToDo/ToDo";

export default function ToDoBoard({ toDos, toDoFilter, tagFilter, cleanFilters }) {
  const [filteredToDos, setFilteredToDos] = useState([]);
  const actualDate = new Date().toLocaleDateString();

  const filterToDosByTag = useCallback((toDos) => {
    return tagFilter ?
      toDos.filter((todo) => todo.tags.includes(tagFilter)) :
      toDos;
  }, [tagFilter])

  useEffect(() => {
    switch (toDoFilter) {
      case "today":
        setFilteredToDos(toDos.filter((todo) => todo.dueDate === actualDate));
        break;
      case "pending":
        setFilteredToDos(toDos.filter((todo) => todo.done === false));
        break;
      case "done":
        setFilteredToDos(toDos.filter((todo) => todo.done === true));
        break;
      default:
        setFilteredToDos(toDos.filter((todo) => todo.dueDate === actualDate));
    }
  }, [toDos, toDoFilter, actualDate, filterToDosByTag])

  return (
    <section className="to-do-board">
      {filterToDosByTag(filteredToDos).map((todo) => {
        return (
          <ToDo
            toDoData={todo}
          />
        )
      })}
    </section>
  )
}
