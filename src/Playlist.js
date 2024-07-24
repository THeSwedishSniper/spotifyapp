import React from 'react';
import Tracklist from './Tracklist'; // Ensure the path is correct

function Playlist({playlist}) {
            if(!playlist){
                return <div>No playlist available</div>
            }

  return (
    <div className='playlist'>
      <h2>{playlist.title}</h2>
      <Tracklist tracks={playlist.tracks} />
    </div>
  );
}

export default Playlist;
