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
      {
        //Si isLoading es true mostramos el loader
        isLoaded ? (
          data.map((informacion) => {
            return (
              <div key={informacion.id}>
                <h3>{informacion.name}</h3>
                <h3>{informacion.phone}</h3>
                <hr></hr>
              </div>
            );
          })
        ) : (
          <h1>Cargando...</h1>
        )
      }
    </>
  );
};

export default Api;
