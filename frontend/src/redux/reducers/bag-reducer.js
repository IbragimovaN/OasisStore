import {
	ADD_PRODUCT_TO_BAG,
	SET_COUNT,
	DELETE_PRODUCT_FROM_BAG,
	SET_COUNT_FROM_BAG,
} from "../actions/constants/action-constants";

const initialCatalogState = {
	bagProductsArr: JSON.parse(localStorage.getItem("bagProductsArr")) || [],
};

export const bagReducer = (state = initialCatalogState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_PRODUCT_TO_BAG: {
			const updatedBagProductsArr = [...state.bagProductsArr, payload];
			localStorage.setItem(
				"bagProductsArr",
				JSON.stringify(updatedBagProductsArr),
			);
			return {
				...state,
				bagProductsArr: updatedBagProductsArr,
			};
		}
		case SET_COUNT: {
			const updatedBagProductsArr = state.bagProductsArr.map((item, index) => {
				if (index === payload) {
					return { ...item, count: item.count + 1 };
				} else {
					return item;
				}
			});
			localStorage.setItem(
				"bagProductsArr",
				JSON.stringify(updatedBagProductsArr),
			);
			return {
				...state,
				bagProductsArr: updatedBagProductsArr,
			};
		}
		case SET_COUNT_FROM_BAG: {
			const updatedBagProductsArr = state.bagProductsArr.map((item) => {
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
			});
			localStorage.setItem(
				"bagProductsArr",
				JSON.stringify(updatedBagProductsArr),
			);
			return {
				...state,
				bagProductsArr: updatedBagProductsArr,
			};
		}

		case DELETE_PRODUCT_FROM_BAG: {
			const updatedBagProductsArr = state.bagProductsArr.filter(
				(product) => product.id !== payload,
			);
			localStorage.setItem(
				"bagProductsArr",
				JSON.stringify(updatedBagProductsArr),
			);
			return {
				...state,
				bagProductsArr: updatedBagProductsArr,
			};
		}

		default:
			return state;
	}
};
