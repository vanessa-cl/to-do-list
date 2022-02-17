import React from "react";
import ToDo from "../../Components/ToDo/ToDo";
import { deleteToDo } from "../../Services/api";
import useToDos from "../../Hooks/useToDos/useToDos";

export default function TodayToDos() {
  const { allToDos } = useToDos();

  return (
    <main className="main">
      <div className="to-do-area">
      {allToDos.isLoading === true ?
      <p>Carregando...</p> :
      allToDos.items.map(todo => {
          return (
            <ToDo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              date={todo.date}
              priority={todo.priority}
              isCompleted={todo.isCompleted}
              onDelete={() => deleteToDo(todo.id)}
            />
          )
        })
        }
      </div>
    </main>
  )
};