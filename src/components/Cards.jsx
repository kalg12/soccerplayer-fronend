import React, { useState, useEffect } from "react";

const Cards = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="container">
      <h1>Jugadores TOP</h1>
      {isLoading ? <h1>Cargando...</h1> : <h1>Lista de jugadores</h1>}
    </div>
  );
};

export default Cards;
