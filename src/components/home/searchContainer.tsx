import React, { FC } from 'react';
import { SearchResult } from '../../types';
import './home.css';

type Props = {
    searchResults: SearchResult[]
    handleSelection: (selected: SearchResult) => void;
    handleMouseEnter: (selected: SearchResult) => void;
    handleMouseLeave: () => void;
}
export const SearchContainer:FC<Props> = ({ searchResults , handleSelection , handleMouseEnter ,  handleMouseLeave}) => (
    <div className="search-results-container">
                    {searchResults.map((result,i) => (
                        <div 
                            aria-hidden="true"
                            key={i} 
                            onClick={() => handleSelection(result)}
                            onMouseEnter={() => handleMouseEnter(result)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <p>{result.name}</p>
                        </div>
                    ))}
                </div>
)