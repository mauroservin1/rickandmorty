import { ADD_FAV, REMOVE_FAV } from "../redux/types";

export function addFav (char) {
    return{type: ADD_FAV , payload : char}
}

export function removeFav  (id) {
    return{type: REMOVE_FAV , payload : id}
}

// export const clearState = () =>{
// return {
//     type: 'CLEAR_STATE'
// }
// }