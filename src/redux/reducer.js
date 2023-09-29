import { ADD_FAV, REMOVE_FAV } from "../redux/types";

const initialState = {
    myFavorites : []
}

const rootreducer = (state = initialState, type, payload) => {
    switch (type){
        case ADD_FAV:
        return {
        ...state,
        myFavorites : [...state.myFavorites, payload]
        }
        case REMOVE_FAV:
            const newFavorites = state.myFavorites.filter((ch)=>ch.id !== payload)
        return {
        ...state,
        myFavorites: newFavorites,
        }
        default:
        return{ 
        ...state
    }
    }
}

export default rootreducer