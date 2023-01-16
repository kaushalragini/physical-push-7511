import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppData/reducer";
import { reducer as AuthReducer } from "./AuthData/reducer";
const rootReducer = combineReducers({ AppReducer, AuthReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
