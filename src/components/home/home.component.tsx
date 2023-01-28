
import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { SearchResult } from '../../types';
import { data } from '../../utils/data';
import './home.css';
  
const searchData = [...data] as unknown as SearchResult[];

const options = {
    includeScore: true,
    keys: ['name'],
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1
};
  
const fuse = new Fuse(searchData, options);
const HomeComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const _searchResults = fuse.search(searchTerm).map(value => value.item);
        if(_searchResults.length > 0){
            setSearchResults(_searchResults);
            setShowResults(true);
        }else{
            setShowResults(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
            <label>
                Search:
                <input
                type="text"
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                placeholder="Search..."
                />
            </label>
            <button type="submit">Search</button>
            </form>
            {showResults && (
                <div className="search-results-container">
                    {searchResults.map((result,i) => (
                        <div key={i}>{result.name}</div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HomeComponent;
