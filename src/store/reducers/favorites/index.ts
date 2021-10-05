
import { AnyAction } from 'redux'
import { ADD_FAVORITE, DEL_FAVORITE, UPDATE_LAST_PRICE } from "../../actions";

export interface IQuote {
  symbol: string;
}

export interface IFavorite {
  data: IQuote[]
  lastUpdate: string
}

const initialState = {
  data: [
    {
      symbol: "TWTR",
    },
    {
      symbol: "AMZN", 
    },
    {
      symbol: "SBUX",
    }
  ],
  lastUpdate: null
};

export const favoritesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_FAVORITE:

        const array = state.data;

        array.push(action.payload);
        
        return { ...state, data: [ array, state.lastUpdate] };
    case DEL_FAVORITE:  
    
    
    const index = state.data.findIndex( item => item.symbol === action.payload)

    console.log(index);
    console.log(action.payload)
    
    
    const s =  state.data;
    s.splice(index, 1);


    return { ...state, data: [ ...s ] };

    case UPDATE_LAST_PRICE: 

    const date = new Date();

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();

    const hour = `${date.getHours()}:${(date.getMinutes()<10?'0':'')
    +date.getMinutes()}:${(date.getSeconds()<10?'0':'')+date.getSeconds()}` 
     
    return { ...state, lastUpdate: `${dd}/${mm}/${yyyy} - ${hour}` };

    default:
      return state;
  }
};