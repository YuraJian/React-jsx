import React from "react";
import { AlbumsContext } from "../context/AlbumsContext";

export const Albums = () => {
  return (
    <AlbumsContext.Consumer>
      {({ albums }) => {
        return albums.map((album) => {
          return (
            <div key={album.id}>
              {album.id} - {albums.indexOf(album)} - {album.title}
            </div>
          );
        });
      }}
    </AlbumsContext.Consumer>
  );
};
