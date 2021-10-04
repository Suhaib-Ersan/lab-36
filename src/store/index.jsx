import { combineReducers, createStore } from "redux";

import categories from "./categories/categories";

// This dependency enables the Redux Dev Tools in your chrome console.
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({ categories });

const store = () => {
    return createStore(reducers, composeWithDevTools());
};

export default store();
