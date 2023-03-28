import React from "react";
import Cards from "./components/Cards";
import Formulario from "./components/Formulario";
import MenuBar from "./components/MenuBar";

//Vamos a crear el una función para consumir nuestra API local

//Vamos a usar useEffect

const App = () => {
  return (
    <>
      <MenuBar />
      <Cards />
      <Formulario />
    </>
  );
};

export default App;
