import { combineReducers } from "redux";

import { favoriteReducer } from "./favoritesReducer";



export const rootReducer = combineReducers({
  
    favoritesState: favoriteReducer,
   
})