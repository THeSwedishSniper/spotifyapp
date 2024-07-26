// src/Track.js
import React from 'react';

function Track({ track, onAdd, onRemove }) {
    const handleAdd = () => {
        if (onAdd) {
            onAdd(track);
        }
    };

    const handleRemove = () => {
        if (onRemove) {
            onRemove(track);
        }
    };

    return (
        <div className='track'>
            <p>{track.name} by {track.artist} from {track.album}</p>
            {onAdd && <button onClick={handleAdd}>Add</button>}
            {onRemove && <button onClick={handleRemove}>Remove</button>}
        </div>
    );
}

export default Track;
