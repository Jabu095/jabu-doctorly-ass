
import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { SearchResult } from '../../types';
import { data } from '../../utils/data';

  
const searchData = [...data] as unknown as SearchResult[];
  console.log("🚀 ~ file: home.component.tsx:9 ~ searchData", searchData)
  
  const options = {
    keys: ['name'],
  };
  
const fuse = new Fuse(searchData, options);

const HomeComponent = () => {
    useEffect(() => {

    },[])

    return (
        <div>
        </div>
    )
}

export default HomeComponent;
