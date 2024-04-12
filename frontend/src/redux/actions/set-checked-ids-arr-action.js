import { tSET_CHECKED_IDS_ARR } from "./constants/action-constants";

export const setCheckedIdsArrAction = (newArr) => {
	return {
		type: tSET_CHECKED_IDS_ARR,
		payload: newArr,
	};
};
