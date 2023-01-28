
import React, { useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import { SearchResult } from '../../types';
import { data } from '../../utils/data';
import './home.css';
import { SearchContainer } from './searchContainer';
  
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
    const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
    const [previousSearchTerm, setPreviousSearchTerm] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement | null>(null);

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

    const handleSelection = (selected: SearchResult) => {
        setSelectedItem(selected.name);
        setSearchResults([]);
        setSearchTerm('');
    };

    const handleClear = () => {
        setSearchTerm('');
        setSearchResults([]);
    };

    const handleMouseEnter = (result:SearchResult) => {
        setPreviousSearchTerm(searchTerm);
        setSearchTerm(result.name);
    };
    
    const handleMouseLeave = () => {
        setSearchTerm(previousSearchTerm);
    };
    
    const handleKeyDown = (event:any) => {
        if (searchResults.length === 0) return;
        if (event.keyCode === 38) {
          // arrow up
          event.preventDefault();
          setSelectedIndex(Math.max(selectedIndex - 1, 0));
        } else if (event.keyCode === 40) {
          // arrow down
          event.preventDefault();
          setSelectedIndex(Math.min(selectedIndex + 1, searchResults.length - 1));
        } else if (event.keyCode === 13) {
          // enter
          event.preventDefault();
          const selectedResult = searchResults[selectedIndex];
          setSearchTerm(selectedResult.name);
          setSearchResults([]);
        }
    };

    useEffect(() => {
        inputRef.current?.addEventListener('keydown', handleKeyDown);
        return () => inputRef.current?.removeEventListener('keydown', handleKeyDown);
    }, [inputRef]);
    
    return (
        <div className="center">
            <h1>Fuzzy search</h1>
            <form onSubmit={handleSearch}>
                <label>
                    Search:
                    <input
                        data-testid="search-element"
                        ref={inputRef}
                        type="text"
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}
                        placeholder="Search..."
                    />
                </label>
                <button data-testid="search-button" className="green-button" type="submit">Search</button>
                <button className="red-button" onClick={handleClear}>Delete</button>
            </form>
            
            {showResults && (
                <SearchContainer 
                    searchResults={searchResults} 
                    handleSelection={handleSelection} 
                    handleMouseEnter={handleMouseEnter} 
                    handleMouseLeave={handleMouseLeave}
                />
            )}
            {selectedItem && <div>{selectedItem}</div>}
        </div>
    )
}

export default HomeComponent;
