import {
	SET_SEARCH_PHRASE,
	SET_SHOULD_SEARCH,
} from "../actions/constants/action-constants";

const initialProductsState = {
	shouldSearch: false,
	searchPhrase: "",
};

export const searchReducer = (state = initialProductsState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_SEARCH_PHRASE: {
			return {
				...state,
				searchPhrase: payload,
			};
		}
		case SET_SHOULD_SEARCH: {
			return {
				...state,
				shouldSearch: payload,
			};
		}
		default:
			return state;
	}
};
