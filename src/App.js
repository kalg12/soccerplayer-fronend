import React from "react";
import Api from "./components/Api";
import Cards from "./components/Cards";
import MenuBar from "./components/MenuBar";

//Vamos a crear el una función para consumir nuestra API local

//Vamos a usar useEffect

const App = () => {
  return (
    <>
      <MenuBar />
      <Cards />
    </>
  );
};

export default App;
