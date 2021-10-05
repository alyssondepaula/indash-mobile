import { ADD_FAVORITE, DEL_FAVORITE, UPDATE_LAST_PRICE } from "../";
import { IFavorite, IQuote } from "../../reducers/favorites";

export const addFavorite = (item: IFavorite) => ({
  type: ADD_FAVORITE,
  payload: item,
});

export const delFavorite = (symbol: string) => {
  return {
    type: DEL_FAVORITE,
    payload: symbol
  };
}
export const updateLastPrice = () => {
  return {
    type: UPDATE_LAST_PRICE,
  };
}