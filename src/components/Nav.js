import React,{useState, useContext} from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { NavLink as Link } from 'react-router-dom';
import Bookmark from './Bookmark'
import {BookmarkContext} from '../context/bookmarkcontext'


const Nav = ({setmovies}) => {
const {bookmark} = useContext(BookmarkContext);
const [searchTerm, setsearchTerm] = useState("")
const handleOnSubmit = async (e)=>{
    console.log("hello")
    e.preventDefault()
    if (searchTerm){
        const MoviesResp = await fetch(SEARCH_API+searchTerm)
        const MoviesR = await MoviesResp.json()
        setmovies(MoviesR.results)
        setsearchTerm('')
    }
}

const handleOnChange = (e)=>{
    setsearchTerm(e.target.value)
  }

const SEARCH_API ="https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query=";

    return (
        <header>
            <form onSubmit={handleOnSubmit}>
            <input className="search" type='search'
            placeholder="Search..." value={searchTerm} 
            onChange={handleOnChange}/>
            </form>
            <Router>
            <Link to="/Bookmark" activeClassName="selected" className="line title">Bookmark({bookmark.length})</Link>
            <Route exact path='/Bookmark'> <Bookmark setmovies={setmovies}/> </Route> 
            </Router>
      </header>
    )
}

export default Nav
