import React from 'react';

function Track({ track }) {
  return (
    <div className="track">
      <h3>{track.name}</h3>
      <p>Artist: {track.artist}</p>
      <p>Album: {track.album}</p>
    </div>
  );
}

export default Track;