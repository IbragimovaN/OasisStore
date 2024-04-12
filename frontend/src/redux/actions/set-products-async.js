import { getAllProducts } from "../../bff/api";
import { setProductsAction } from "./set-products-action";
import { request } from "../../utils.js/request";
import { setLastPageAction } from "./set-last-page-action";

export const setProductsAsync =
	(idCategory, searchPhrase, page, limit) => (dispatch) => {
		return request(
			idCategory
				? "/products"
				: `/products?search=${searchPhrase}&page=${page}&limit=${limit}`,
		).then(({ data: { lastPage, products } }) => {
			dispatch(setLastPageAction(lastPage));
			const newFilteredProducts = products.filter(
				(product) => product.category === idCategory,
			);

			dispatch(setProductsAction(idCategory ? newFilteredProducts : products));
		});
	};
