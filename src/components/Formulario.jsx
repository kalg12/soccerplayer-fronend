import React, { useState } from "react";
const axios = require("axios");
const API_URL = "https://soccer-backend.onrender.com/api/jugadores/kevin";

const formularioInicio = {
  playerName: "",
  playerPosition: "",
};

const Formulario = () => {
  const [formulario, setFormulario] = useState(formularioInicio);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  return (
    <>
      <h1>Formulario para enviar jugadores a la BD</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del jugador:
          <input
            type="text"
            name="playerName"
            value={formulario.playerName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Posición del jugador:
          <input
            type="text"
            name="playerPosition"
            value={formulario.playerPosition}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
