import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from './Spotify'; // Ensure the correct import path

const sampleTracks = [
    { name: 'Song 1', artist: 'Artist 1', album: 'Album 1', uri: 'uri1' },
    { name: 'Song 2', artist: 'Artist 2', album: 'Album 2', uri: 'uri2' },
    { name: 'Song 3', artist: 'Artist 3', album: 'Album 3', uri: 'uri3' },
];

function App() {
    const [playlist, setPlaylist] = useState({
        title: "My Playlist",
        tracks: sampleTracks,
    });
    const [userPlaylists, setUserPlaylists] = useState([]);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchPerformed, setIsSearchPerformed] = useState(false);
    const [showMySongs, setShowMySongs] = useState(false);

    useEffect(() => {
        Spotify.getUserPlaylists()
            .then(playlists => {
                setUserPlaylists(playlists);
            });
    }, []);

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            // Perform search and update searchResults
            Spotify.search(searchTerm).then(results => {
                setSearchResults(results);
                setIsSearchPerformed(true);
            });
        } else {
            setSearchResults([]);
            setIsSearchPerformed(false);
        }
    };

    const handleSave = () => {
        if (!playlist.tracks || playlist.tracks.length === 0) {
            console.log("No tracks to save.");
            return;
        }

        const trackURIs = playlist.tracks.map(track => track.uri);
        console.log("Saving playlist with URIs:", trackURIs);
        
        Spotify.savePlaylist(playlist.title, trackURIs)
            .then(() => {
                console.log("Playlist saved successfully!");
                setPlaylist({ title: "My Playlist", tracks: [] }); // Reset playlist
            })
            .catch(error => {
                console.error("Error saving playlist:", error);
            });
    };

    const addTrackToPlaylist = (track) => {
        setPlaylist((prevPlaylist) => ({
            ...prevPlaylist,
            tracks: [...prevPlaylist.tracks, track],
        }));
        setShowMySongs(true);
    };

    const removeTrackFromPlaylist = (track) => {
        setPlaylist((prevPlaylist) => ({
            ...prevPlaylist,
            tracks: prevPlaylist.tracks.filter(t => t.uri !== track.uri),
        }));
    };

    const updatePlaylistTitle = (title) => {
        setPlaylist((prevPlaylist) => ({
            ...prevPlaylist,
            title: title,
        }));
    };

    const handleSelectPlaylist = (playlist) => {
        setSelectedPlaylist(playlist);
        setShowMySongs(true);
    };

    const handleCreateNewPlaylist = () => {
        setSelectedPlaylist(null);
        setShowMySongs(true);
    };

    return (
        <div>
            <h1>Welcome to my website!</h1>
            <SearchBar onSearch={handleSearch} />
            {isSearchPerformed && (
                <SearchResults tracks={searchResults} onAdd={addTrackToPlaylist} />
            )}
            {showMySongs && (
                <Playlist 
                    playlist={playlist} 
                    onRemove={removeTrackFromPlaylist} 
                    onTitleChange={updatePlaylistTitle} 
                />
            )}
            {!showMySongs && userPlaylists.length > 0 && (
                <div>
                    <h2>Your Playlists</h2>
                    <ul>
                        {userPlaylists.map(playlist => (
                            <li key={playlist.id}>
                                <button onClick={() => handleSelectPlaylist(playlist)}>
                                    {playlist.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleCreateNewPlaylist}>Create New Playlist</button>
                </div>
            )}
            <div>
                <button onClick={handleSave}>Save To Spotify</button>
            </div>
        </div>
    );
}

export default App;
