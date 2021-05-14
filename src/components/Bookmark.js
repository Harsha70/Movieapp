import React, { useContext }  from 'react'
import {BookmarkContext} from '../context/bookmarkcontext'

const Bookmark = ({setmovies}) => {
const {bookmark} = useContext(BookmarkContext);
    setmovies(bookmark)
    return (
        <div>
        </div>
    )
}

export default Bookmark
