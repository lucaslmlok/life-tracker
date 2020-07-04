import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export interface State {}

const rootReducer = combineReducers({});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isProduction = process.env.NODE_ENV === "production";

const middleWare = isProduction
  ? applyMiddleware(thunk)
  : composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, middleWare);

export default store;
