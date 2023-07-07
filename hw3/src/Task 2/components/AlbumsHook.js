import React, { useContext } from "react";

import { AlbumsContextHook } from "./AlbumsContextHook";

export const AlbumsHook = (props) => {
  const { albums } = useContext(AlbumsContextHook);

  return albums.map((album) => {
    return (
      <div key={album.id}>
        {album.id} - {albums.indexOf(album)} - {album.title}
      </div>
    );
  });
};
