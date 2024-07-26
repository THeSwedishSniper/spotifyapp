import React from 'react';
import Tracklist from './Tracklist'; // Ensure the path is correct

function SearchResults({ tracks, onAdd }) {
    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <Tracklist tracks={tracks} onAdd={onAdd} />
        </div>
    );
}

export default SearchResults;
