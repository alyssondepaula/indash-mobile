import { AnyAction } from 'redux'
import { USER_LOGIN, USER_LOGOFF } from "../../actions";

export interface IUser {
  email: string;
  password: string;
}

const initialState = {
  data: {
      email: "alyssonjuniordepaula@gmail.com",
      password: "123456"
    }
};

export const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case USER_LOGIN:
        return { ...state, data: {
            email: "alyssonjuniordepaula@gmail.com",
            password: "123456"
          }};
    case USER_LOGOFF:  
    return { ...state, data: {} };

    default:
      return state;
  }

}