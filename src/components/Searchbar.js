import React from 'react'

const Searchbar = () => {
    return (
        <div className='searchBar'>
            <div className="container">
                <input type="text" placeholder='What are you looking for..' />
                <button className='btn-search'><img src="img/search.svg" alt="search" style={{height:20}} /><span>Search</span> </button>
                <button className='btn-cancel'>Cancel</button>
            </div>
        </div>
    )
}

export default Searchbar;