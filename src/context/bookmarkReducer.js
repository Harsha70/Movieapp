export const bookmarkReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_MOVIE':
        return {
            ...state, 
            bookmark:[action.payload, ...state.bookmark]
        }
      case 'REMOVE_MOVIE':
        //   console.log(state.bookmark[0].id, action)
        return {...state,
            bookmark:state.bookmark.filter(movie => movie.id !== action.payload.id)
        }
      default:
        return state;
    }
  } 