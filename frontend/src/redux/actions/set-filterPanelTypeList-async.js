import { getFilterPanelTypeList } from "../../bff/api";

import { setFilterPanelTypeList } from "./set-filterPanelTypeList-action";

export const setFilterPanelTypeListAsync =
	(currentCategoryId) => (dispatch) => {
		return getFilterPanelTypeList().then((loadedList) => {
			const newFilterPanelTypeList = loadedList.filter((item) =>
				item.forCategory.includes(currentCategoryId),
			);
			dispatch(setFilterPanelTypeList(newFilterPanelTypeList));
		});
	};
