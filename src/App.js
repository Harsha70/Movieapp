import './App.css';
import React, {useState, useEffect} from 'react'
import Movies from './components/Movies'
import BookmarkContextProvider from './context/bookmarkcontext'

import Nav from './components/Nav'


const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584";


const App = () => {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    async function fetchData(){
    console.log("inside")
      const MoviesResp = await fetch(FEATURED_API)
      const MoviesR = await MoviesResp.json()
      setmovies(MoviesR.results)
    }
    fetchData()
  })


  return (
    <BookmarkContextProvider>
    <div>
      <Nav setmovies={setmovies}/>
      
      <div className='movie-container'>
      {movies.length>0 && 
        movies.map((movie)=><Movies key={movie.id} movie={movie}/>)}
    </div>
    </div>
    </BookmarkContextProvider>
  );
}

export default App;
