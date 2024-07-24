import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';


const sampleTracks = [
    { name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
    { name: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
];

function App() {

    const [playlist, setPlaylist] = useState ({
        title: "My Playlist",
        tracks: sampleTracks,
    })

    const handleSave = () => {
          // Placeholder for save functionality
    console.log("Save to Spotify clicked");
    };
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <div>
        <button onClick={handleSave}> Save To Spotify</button>
      </div>
    </div>
  );
}

export default App;