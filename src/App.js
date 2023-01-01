import React, { useEffect } from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'
import { useState } from 'react'

const title = 'Favorite Movie Directory'

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovies, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(moviesList);
  }, [moviesList]);

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform setMoviesList={setMoviesList}/>
        </div >
        <div className='layout-column w-30'>
          <Search setFilteredList={setFilteredList} moviesList={moviesList}/>
          <Movieslist moviesList={filteredMovies}/> 
          {!filteredMovies || filteredMovies.length <= 0 &&
            <div data-testid='noResult'>
              <h3 className='text-center'>No Results Found</h3>
            </div>
          }
        </div>
      </div> 
    </div>
  )
}

export default App;
