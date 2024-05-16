import {
	SET_FILTERED_PRODUCTS,
	SET_PRODUCTS,
	SET_IS_UPDATED_PRODUCTS,
	SET_CURRENT_PRODUCT,
	SET_COMMENTS_CURRENT_PRODUCT,
	DELETE_COMMENT,
} from "../actions/constants/action-constants";

const initialProductsState = {
	products: [],
	filteredProducts: [],
	isUpdatedProducts: false,
	currentProduct: {},
};

export const productsReducer = (state = initialProductsState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_PRODUCTS: {
			return {
				...state,
				products: payload,
			};
		}
		case SET_IS_UPDATED_PRODUCTS: {
			return {
				...state,
				isUpdatedProducts: payload,
			};
		}
		case SET_FILTERED_PRODUCTS: {
			return {
				...state,
				filteredProducts: payload,
			};
		}
		case SET_CURRENT_PRODUCT: {
			return {
				...state,
				currentProduct: payload,
			};
		}
		case SET_COMMENTS_CURRENT_PRODUCT: {
			return {
				...state,
				currentProduct: {
					...state.currentProduct,
					comments: [...state.currentProduct.comments, payload],
				},
			};
		}
		case DELETE_COMMENT: {
			return {
				...state,
				currentProduct: {
					...state.currentProduct,
					comments: state.currentProduct.comments.filter(
						(comment) => comment.id !== payload,
					),
				},
			};
		}
		default:
			return state;
	}
};
