import { combineReducers } from "redux";
import { favoritesReducer } from "./favorites";
import { recentsCompanies } from "./recentsCompanies";
import { userReducer } from "./user";

export const reducers = combineReducers({
      user: userReducer,
      favorites: favoritesReducer,
      recentsCompanies: recentsCompanies
  });
  
  export type RootState = ReturnType<typeof reducers>

  