// src/Tracklist.js
import React from 'react';
import Track from './Track'; // Ensure the path is correct

function Tracklist({ tracks, onAdd, onRemove }) {
    if (!tracks || tracks.length === 0) {
        return <div>No tracks available</div>;
    }

    return (
        <div className='tracklist'>
            {tracks.map((track, index) => (
                <Track key={index} track={track} onAdd={onAdd} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default Tracklist;
