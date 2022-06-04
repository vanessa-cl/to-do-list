import React, { useState, useEffect } from "react";
import ToDo from "../ToDo/ToDo";
import { formatDate } from "../../Utils/utils";
import { deleteToDo } from "../../Services/api";

export default function ToDoBoard({ toDos, toDoFilter, tagFilter }) {
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    switch (toDoFilter) {
      case "all":
        setFilteredToDos(toDos);
        console.log("All");
        break;
      case "today":
        const actualDate = new Date();
        const formatActualDate = formatDate(actualDate.toISOString());
        setFilteredToDos(toDos.filter((todo) => formatDate(todo.createdAt) === formatActualDate))
        console.log("Today");
        break;
      case "pending":
        setFilteredToDos(toDos.filter((todo) => todo.isCompleted === false))
        console.log("Pending")
        break;
      case "finished":
        setFilteredToDos(toDos.filter((todo) => todo.isCompleted === true))
        console.log("Finished")
        break;
      default:
        setFilteredToDos(toDos);
        console.log("nada")
    }
  }, [toDos, toDoFilter])

  useEffect(() => {
    setFilteredToDos(toDos.filter((todo) => todo.tags.includes(tagFilter)));
  }, [toDos, tagFilter])

  return (
    <section className="to-do-board">
      {console.log(toDos)}
      {filteredToDos.map((todo) => {
        return (
          <ToDo
            id={todo.id}
            title={todo.title}
            description={todo.description}
            createdAt={todo.createdAt}
            dueDate={todo.dueDate}
            isCompleted={todo.isCompleted}
            onEdit={todo}
            onDelete={() => deleteToDo(todo.id)}
            tags={todo.tags}
          />
        )
      })}
    </section>
  )
}
