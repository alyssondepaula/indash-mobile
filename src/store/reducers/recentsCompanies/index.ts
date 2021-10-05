
import { AnyAction } from 'redux'
import { ADD_FAVORITE, DEL_FAVORITE, UPDATE_LAST_PRICE } from "../../actions";

export interface IQuoteRecents {
  symbol: string;
}

export interface IRecentsCompanies {
  data: IQuoteRecents[]
}

const initialState = {
  data: [
    {
      symbol: "AAPL",
    },
    {
      symbol: "FB", 
    },
    {
      symbol: "SBUX",
    }
  ]
};

export const recentsCompanies = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};