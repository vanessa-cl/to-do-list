import React, { useState, useEffect } from "react";
import ToDo from "../ToDo/ToDo";
import { formatDate } from "../../Utils/utils";

export default function ToDoBoard({ toDos, toDoFilter, tagFilter }) {
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [toDosByTag, setToDosByTag] = useState([]);

  useEffect(() => {
    switch (toDoFilter) {
      case "all":
        setFilteredToDos(toDos);
        console.log("All");
        break;
      case "today":
        const actualDate = new Date();
        const formatActualDate = formatDate(actualDate.toISOString());
        setFilteredToDos(filterToDosByTag(toDos.filter((todo) => formatDate(todo.createdAt) === formatActualDate)));
        console.log("Today");
        break;
      case "pending":
        setFilteredToDos(toDos.filter((todo) => todo.done === false))
        console.log("Pending")
        break;
      case "finished":
        setFilteredToDos(toDos.filter((todo) => todo.done === true))
        console.log("Finished")
        break;
      default:
        setFilteredToDos(toDos);
        console.log("nada")
    }
  }, [toDos, toDoFilter])

  const filterToDosByTag = (toDos) => {
    return toDos.filter((todo) => todo.tags.includes(tagFilter));
  }

  // useEffect(() => {
  // setFilteredToDos();
  // }, [toDos, tagFilter])

  return (
    <section className="to-do-board">
      {console.log(toDos)}
      {filteredToDos.map((todo) => {
        return (
          <ToDo
            toDoData={todo}
          />
        )
      })}
    </section>
  )
}
