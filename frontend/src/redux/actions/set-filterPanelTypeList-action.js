import { SET_FILTER_PANEL_TYPE_LIST } from "./constants/action-constants";
import { allFilterPanelTypeslist } from "../../constants/all-filter-panel-types-list";

export const setFilterPanelTypeList = (currentCategoryId) => {
	const newFilterPanelTypeList = allFilterPanelTypeslist.filter((item) =>
		item.forCategory.includes(currentCategoryId),
	);
	return {
		type: SET_FILTER_PANEL_TYPE_LIST,
		payload: newFilterPanelTypeList,
	};
};
