import React, { useState, useEffect } from "react";
import ToDo from "../ToDo/ToDo";
import { formatDate } from "../../Utils/utils";
import { deleteToDo } from "../../Services/api";

export default function ToDoBoard({ todos, filter }) {
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    switch (filter) {
      case "all":
        setFilteredToDos(todos);
        console.log("All");
        break;
      case "today":
        const actualDate = new Date();
        const formatActualDate = formatDate(actualDate.toISOString());
        setFilteredToDos(todos.filter(todo => formatDate(todo.createdAt) === formatActualDate))
        console.log("Today");
        break;
      case "pending":
        setFilteredToDos(todos.filter(todo => todo.isCompleted === false))
        console.log("Pending")
        break;
      case "finished":
        setFilteredToDos(todos.filter(todo => todo.isCompleted === true))
        console.log("Finished")
        break;
      default:
        // setFilteredToDos(todos.filter(todo => formatDate(todo.createdAt) === formatActualDate))
        console.log("nada")
    }
  }, [todos, filter])

  return (
    <section className="to-do-board">
      {filteredToDos.map(todo => {
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
          />
        )
      })}
    </section>
  )
}
