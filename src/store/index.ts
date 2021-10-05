import { createStore } from "redux";

import { reducers } from "./reducers";


export const store = createStore(reducers);

export type AppDispatch = typeof store.dispatch