import { SET_CURRENT_CATEGORY } from "./constants/action-constants";
import { findChildMenuCategory } from "./utills/findChildMenuCategory";

export const setCurrentCategoryAction = (idCaregory) => {
	return {
		type: SET_CURRENT_CATEGORY,
		payload: findChildMenuCategory(idCaregory),
	};
};
