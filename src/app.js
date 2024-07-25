// src/App.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

const sampleTracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1', uri: 'spotify:track:1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2', uri: 'spotify:track:2' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3', uri: 'spotify:track:3' },
];

const App = () => {
  const [searchResults, setSearchResults] = useState(sampleTracks);
  const [playlist, setPlaylist] = useState({
    title: 'My Playlist',
    tracks: [],
  });

  const addTrackToPlaylist = (track) => {
    if (!playlist.tracks.find(playlistTrack => playlistTrack.id === track.id)) {
      setPlaylist({
        ...playlist,
        tracks: [...playlist.tracks, track],
      });
    }
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylist({
      ...playlist,
      tracks: playlist.tracks.filter(playlistTrack => playlistTrack.id !== track.id),
    });
  };

  const updatePlaylistTitle = (title) => {
    setPlaylist({
      ...playlist,
      title,
    });
  };

  const savePlaylist = () => {
    // Mocking API call to save playlist
    const trackURIs = playlist.tracks.map(track => track.uri);
    console.log(`Saving playlist: ${playlist.title}`);
    console.log(`Track URIs: ${trackURIs.join(', ')}`);

    // Reset the playlist
    setPlaylist({
      title: 'My Playlist',
      tracks: [],
    });
  };

  return (
    <div>
      <h1>Welcome to my website!</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults tracks={searchResults} onAdd={addTrackToPlaylist} />
        <Playlist playlist={playlist} onRemove={removeTrackFromPlaylist} onUpdateTitle={updatePlaylistTitle} />
      </div>
      <div>
        <button onClick={savePlaylist}> Save To Spotify</button>
      </div>
    </div>
  );
}

export default App;
