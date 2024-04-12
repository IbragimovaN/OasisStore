import { SET_FILTER_PANEL_TYPE_LIST } from "./constants/action-constants";

export const setFilterPanelTypeList = (list) => {
	return {
		type: SET_FILTER_PANEL_TYPE_LIST,
		payload: list,
	};
};
