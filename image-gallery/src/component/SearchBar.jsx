import React from 'react';
import Button from "@mui/material/Button";

const SearchBar = ({searchValue,handleChange,onSearch}) => {
  return (
    <div>

    <input
    type='text'
    placeholder='Search for images'
    value={searchValue}
    onChange={(e)=>handleChange(e.target.value)}
    />

    <Button variant='contained' color='primary' onClick={onSearch}>Search</Button>
      
    </div>
  )
}

export default SearchBar
