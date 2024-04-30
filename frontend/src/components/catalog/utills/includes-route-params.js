import { categoryList } from "../../../constants";

export const includesRouteParams = (params) => {
	const list = categoryList.reduce((acc, item) => {
		acc.push(item.id);
		return acc;
	}, []);

	if (list.includes(params)) {
		return true;
	} else {
		return false;
	}
};
