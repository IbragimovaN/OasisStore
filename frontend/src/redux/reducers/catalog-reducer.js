import {
	SET_CURRENT_CATEGORY,
	SET_FILTER_PANEL_TYPE_LIST,
	SET_IS_LOADING,
	tSET_CHECKED_IDS_ARR,
	SET_LAST_PAGE,
} from "../actions/constants/action-constants";

const initialCatalogState = {
	currentCategory: { id: "", name: "все товары" },
	filterPanelTypelist: [],
	checkedIdsArr: [],
	isLoading: false,
	lastPage: "",
};

export const catalogReducer = (state = initialCatalogState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_CURRENT_CATEGORY: {
			return {
				...state,
				currentCategory: payload,
			};
		}

		case SET_FILTER_PANEL_TYPE_LIST: {
			return {
				...state,
				filterPanelTypelist: payload,
			};
		}

		case tSET_CHECKED_IDS_ARR: {
			return {
				...state,
				checkedIdsArr: payload,
			};
		}

		case SET_IS_LOADING: {
			return {
				...state,
				isLoading: payload,
			};
		}

		case SET_LAST_PAGE: {
			return {
				...state,
				lastPage: payload,
			};
		}

		default:
			return state;
	}
};
