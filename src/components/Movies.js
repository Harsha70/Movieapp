import React, { useContext } from 'react'
import {BookmarkContext} from '../context/bookmarkcontext'

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movies = (props) => {
  const {title, poster_path, overview, vote_average} = props.movie
  const {addmovietobookmark, bookmark, removemoviefrombookmark} = useContext(BookmarkContext);
  const existmovie = bookmark.find(m=>m.id===props.movie.id)
  // console.log("bookmark", bookmark)

    const setVoteClass = (vote) => {
        if (vote >= 8) {
          return "green";
        } else if (vote >= 6) {
          return "orange";
        } else {
          return "red";
        }
      }

    return (
        <div className="movie">
            <img src={IMAGE_API + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                {existmovie?
                <h2 style={{cursor:'pointer'}} onClick={()=>removemoviefrombookmark(props.movie)}>Remove Bookmark   <i className="fas fa-bookmark"></i></h2>
                :
                <h2 onClick={()=>addmovietobookmark(props.movie)}>Bookmark   <i className="fas fa-bookmark"></i></h2>
                }
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movies
