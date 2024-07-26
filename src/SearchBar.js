import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder='Enter a song or album name'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown} // Handle Enter key press
            />
            <button onClick={handleSearch} type="button">Search</button> {/* Button type "button" prevents form submission */}
        </div>
    );
}

export default SearchBar;
