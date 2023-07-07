/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createContext } from "react";

export const AlbumsContextHook = createContext();

export const AlbumsProviderHook = (props) => {
  const [error, setError] = useState("");
  const [albums, setAlbums] = useState([]);

  const BASE_URL = "https://jsonplaceholder.typicode.com/albums";

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => {
        if (!response.ok) {
          setError("Can't collect data from server");
          throw new Error("Can't collect data from server");
        }
        return response.json();
      })
      .then((albums) => {
        setAlbums(albums);
        setError("");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AlbumsContextHook.Provider value={{ albums }}>
      {props.children}
    </AlbumsContextHook.Provider>
  );
};
