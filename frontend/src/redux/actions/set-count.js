import { SET_COUNT, SET_COUNT_FROM_BAG } from "./constants/action-constants";

export const setCountAction = (dataIndex) => {
	return {
		type: typeof dataIndex === "object" ? SET_COUNT_FROM_BAG : SET_COUNT,
		payload: dataIndex,
	};
};
