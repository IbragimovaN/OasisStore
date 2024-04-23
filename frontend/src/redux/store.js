import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
	userReducer,
	productsReducer,
	catalogReducer,
	searchReducer,
	errorReducer,
	modalReducer,
	bagReducer,
} from "./reducers";

const reducer = combineReducers({
	userState: userReducer,
	productsState: productsReducer,
	catalogState: catalogReducer,
	searchState: searchReducer,
	errorState: errorReducer,
	modalState: modalReducer,
	bagState: bagReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
