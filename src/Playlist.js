import React from 'react';
import Tracklist from './Tracklist'; // Ensure the path is correct

function Playlist({ playlist, onRemove, onTitleChange }) {
    if (!playlist) {
        return <div>No playlist available</div>;
    }

    const handleTitleChange = (event) => {
        onTitleChange(event.target.value);
    };

    return (
        <div className="playlist">
            <input
                type="text"
                value={playlist.title}
                onChange={handleTitleChange}
            />
            <Tracklist tracks={playlist.tracks} onRemove={onRemove} />
        </div>
    );
}

export default Playlist;
