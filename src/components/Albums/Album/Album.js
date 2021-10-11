import React from "react";
import "./Album.css";

const Album = ({ album }) => {
  return (
    <div className='album'>
      <img alt='Album' src={album.images[2].url} />
      <div>Title: &nbsp; {album.name}</div>
      <div>Artist: &nbsp; {album.artists[0].name}</div>
    </div>
  );
};

export default Album;
