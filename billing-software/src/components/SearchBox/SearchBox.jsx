import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBox = ({onSearch}) => {
    const [searchText,setSearchtext]=useState("");
    const handleInputChange=(e)=>{
        const text=e.target.value;
        setSearchtext(text);
        onSearch(text);
    }
  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder='Search items...' value={searchText} onChange={handleInputChange}/>
        <span className='input-group-text bg-warning'>
<FaSearch />
        </span>
    </div>
  )
}

export default SearchBox