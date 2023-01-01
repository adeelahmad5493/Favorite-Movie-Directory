import React from 'react';

function Search({moviesList, setFilteredList}) {

  const handleSearch = value => {
    if(value) {
      setFilteredList(moviesList.filter( item => (
        item.name.toLocaleLowerCase().search(value.toLocaleLowerCase()) !== -1
      )));
      return ;
    }
    setFilteredList(moviesList);
  }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        onChange={e => handleSearch(e.target.value)}
      />
    </section>
  )
}

export default Search;
