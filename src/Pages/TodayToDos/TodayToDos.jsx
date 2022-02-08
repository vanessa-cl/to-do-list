import React, { useState, useEffect } from "react";
import ToDo from "../../Components/ToDo/ToDo";
import { getToDo, deleteToDo, updateToDo } from "../../Services/api";

export default function TodayToDos() {
  const [allToDos, setAllToDos] = useState({
    items: {},
    isLoading: true
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getToDo();
      setAllToDos({
        items: res.data,
        isLoading: false
      })
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  

  return (
    <main className="main">
      Hoje
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