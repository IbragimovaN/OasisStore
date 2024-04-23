import {
	ADD_PRODUCT_TO_BAG,
	SET_COUNT,
	DELETE_PRODUCT_FROM_BAG,
	SET_COUNT_FROM_BAG,
} from "../actions/constants/action-constants";

const initialCatalogState = {
	bagProductsArr: [],
};

export const bagReducer = (state = initialCatalogState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_PRODUCT_TO_BAG: {
			return {
				...state,
				bagProductsArr: [...state.bagProductsArr, payload],
			};
		}
		case SET_COUNT: {
			console.log(payload);
			return {
				...state,
				bagProductsArr: state.bagProductsArr.map((item, index) => {
					if (index === payload) {
						return { ...item, count: item.count + 1 };
					} else {
						return item;
					}
				}),
			};
		}
		case SET_COUNT_FROM_BAG: {
			return {
				...state,
				bagProductsArr: state.bagProductsArr.map((item) => {
					if (item.id === payload.id) {
						return {
							...item,
							count:
								payload.sign === "-"
									? item.count > 1
										? item.count - 1
										: (item.count = 1)
									: item.count + 1,
						};
					} else {
						return item;
					}
				}),
			};
		}

		case DELETE_PRODUCT_FROM_BAG: {
			return {
				...state,
				bagProductsArr: state.bagProductsArr.filter(
					(product) => product.id !== payload,
				),
			};
		}

		default:
			return state;
	}
};
