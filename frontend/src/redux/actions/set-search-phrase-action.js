import { SET_SEARCH_PHRASE } from "./constants/action-constants";

export const setSearchPhraseAction = (searchPhrase) => {
	return {
		type: SET_SEARCH_PHRASE,
		payload: searchPhrase,
	};
};
