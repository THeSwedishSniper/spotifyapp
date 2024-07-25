// src/Playlist.js
import React, { useState } from 'react';
import Tracklist from './Tracklist'; // Ensure the path is correct

function Playlist({ playlist, onRemove, onUpdateTitle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(playlist.title);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
    onUpdateTitle(title);
  };

  if (!playlist) {
    return <div>No playlist available</div>;
  }

  return (
    <div className='Playlist'>
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          autoFocus
        />
      ) : (
        <h2 onClick={handleTitleClick}>{playlist.title}</h2>
      )}
      <Tracklist tracks={playlist.tracks} onRemove={onRemove} />
    </div>
  );
}

export default Playlist;
