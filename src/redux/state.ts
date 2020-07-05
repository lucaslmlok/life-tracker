import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer, { AuthState } from "./reducers/auth";

export interface State {
  auth: AuthState;
}

const rootReducer = combineReducers({
  auth: authReducer,
});

// --------------------

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isProduction = process.env.NODE_ENV === "production";

const middleWare = isProduction
  ? applyMiddleware(thunk)
  : composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, middleWare);

export default store;
