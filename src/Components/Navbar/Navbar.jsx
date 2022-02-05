import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimeIcons } from 'primereact/api';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Sidebar visible={visible} className="navbar" position="left" onHide={() => setVisible(false)}>
        <Link className="navlink" to="/">Hoje</Link>
        <Link className="navlink" to="/all">Todas as tarefas</Link>
        <Link className="navlink" to="/pendant">Tarefas pendentes</Link>
        <Link className="navlink" to="/done">Tarefas concluídas</Link>
      </Sidebar>
      <Button icon={PrimeIcons.BARS} onClick={(e) => setVisible(true)} />
    </>
  )
}