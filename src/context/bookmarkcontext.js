import React, { createContext, useReducer } from 'react';
import { bookmarkReducer } from './bookmarkReducer';

const initialstate = {
    bookmark:[]
}

export const BookmarkContext = createContext();

const BookmarkContextProvider = (props) => {
    const [bookmarkstate, dispatch] = useReducer(bookmarkReducer, initialstate);
    
    const addmovietobookmark = (movie) => {
        dispatch({type:'ADD_MOVIE', payload: movie})
    }
    
    const removemoviefrombookmark = (movie) => {
        dispatch({type:'REMOVE_MOVIE', payload: movie})
    }

    return (
        <BookmarkContext.Provider value={{ bookmark: bookmarkstate.bookmark,
         addmovietobookmark,
         removemoviefrombookmark}}>
          {props.children}
        </BookmarkContext.Provider>
      );
}

export default BookmarkContextProvider;