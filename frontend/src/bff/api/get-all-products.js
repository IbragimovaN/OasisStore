import { transformProduct } from "../transforms";

export const getAllProducts = async (searchPhrase) => {
	return fetch(`http://localhost:3005/catalog?title_like=${searchPhrase}`)
		.then((loadedProduct) => loadedProduct.json())
		.then((loadedProduct) => {
			return loadedProduct && loadedProduct.map(transformProduct);
		});
};
