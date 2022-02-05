import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact/button";
import { PrimeIcons } from "primereact/api";

export default function NewToDo() {
  const [toDoInfo, setToDoInfo] = useState({
    title: "",
    date: "",
    priority: "",
    isCompleted: false
  });

  

  function handleChange(e) {
    return setToDoInfo(() => {
      const auxValues = { ...toDoInfo };
      auxValues[e.target.name] = e.target.value
      return auxValues;
    });
  };

  const priorityOptions = [
    { label: "Alta", value: "high" },
    { label: "Média", value: "medium" },
    { label: "Baixa", value: "low" }
  ];

  return (
    <section className="new-to-do-btn">
      <Button className="p-button-rounded" icon={PrimeIcons.PLUS} onClick={() => setAddToDo(true)}></Button>
        <section className="new-to-do">
          <Button className="p-button-rounded" icon={PrimeIcons.TIMES} onClick={() => setAddToDo(false)}></Button>
          <span className="p-float-label">
            <InputText id="title" name={"title"} autoComplete="off" onChange={handleChange} />
            <label htmlFor="title">Título</label>
          </span>
          <span className="p-float-label">
          </span>
          <Dropdown id="priority" name={"priority"} options={priorityOptions} onChange={handleChange} />
          <Calendar id="date" dateFormat="dd/mm/yy" name={"date"} onChange={handleChange} />
          <Button label="Adicionar"></Button>
        </section>
    </section>
  )
};