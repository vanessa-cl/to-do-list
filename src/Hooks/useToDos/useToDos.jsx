import { useState, useEffect } from "react";
import { getToDo } from "../../Services/api";

export default function useToDos() {
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
    }, 20000);
    return () => clearInterval(interval);
  }, [])

  return {
    allToDos
  }

}