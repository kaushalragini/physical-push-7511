import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppData/reducer";
import { reducer as WomenAppReducer } from "./WomenAppData/reducer";
import { reducer as AuthReducer } from "./AuthData/reducer";
const rootReducer = combineReducers({ AppReducer, WomenAppReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
