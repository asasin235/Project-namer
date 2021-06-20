import React from 'react'
import './SearchBox.css'

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input onChange={(Event) => onInputChange(Event.target.value)} placeholder="Type keywords" className="search-input" />
        </div>
    )
}

export default SearchBox
