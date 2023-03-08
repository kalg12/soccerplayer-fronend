import React, { useState, useEffect } from "react";
const API = "https://jsonplaceholder.typicode.com/users";

const Api = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //Aquí vamos a trabar código de JS - Asymc / Await
  const getDataApi = async () => {
    try {
      //Hacemos fetch de la API y se lo asignamos  a una variable
      const response = await fetch(API);
      //Convertimos la respuesta a JSON
      const data = await response.json();
      //Asignamos la data a nuestro estado
      setData(data);
      //Imprimimos la data en consola
      console.log(data);
      //Cambiamos el estado de isLoading a false esto nos servirá para un loader
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <>
      {isLoaded ? (
        data.map(() => {
          return <h1>Hola</h1>;
        })
      ) : (
        <h1>Cargando información de la API</h1>
      )}
      <h1>Componente API</h1>
    </>
  );
};

export default Api;
