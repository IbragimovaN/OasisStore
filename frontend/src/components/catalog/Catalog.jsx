import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCard, FilterPanel } from "./catalog-components";
import { Container, H2, Pagination } from "../../components";
import { PAGINATION_LIMIT } from "../../constants/paginations-limit";
import { ERROR } from "../../constants/error-message";
import { includesRouteParams } from "./utills/includes-route-params";

import {
	setConnectionError,
	setCurrentCategoryAction,
	setIsLoading,
	setFilterPanelTypeList,
	setRouteErrorAction,
	getProductsAsync,
} from "../../redux";
import {
	currentCategorySelector,
	productsSelector,
	searchPhraseSelector,
	shouldSearchSelector,
} from "../../redux/selectors";
import styles from "./Catalog.module.css";

export const Catalog = () => {
	const dispatch = useDispatch();
	const products = useSelector(productsSelector);
	const currentCategory = useSelector(currentCategorySelector);
	const params = useParams();
	const searchPhrase = useSelector(searchPhraseSelector);
	const shouldSearch = useSelector(shouldSearchSelector);
	const [page, setPage] = useState(1);

	const navigate = useNavigate();

	const handleError = (set, message) => {
		dispatch(set(message));
		dispatch(setIsLoading(false));
		navigate("/error");
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		dispatch(setIsLoading(true));
		if (params.idCategory) {
			!includesRouteParams(params.idCategory) &&
				handleError(setRouteErrorAction, ERROR.NOT_FOUND);

			Promise.all([
				dispatch(getProductsAsync(params.idCategory)),
				dispatch(setCurrentCategoryAction(params?.idCategory)),
				dispatch(setFilterPanelTypeList(params?.idCategory)),
			])
				.then(() => {
					dispatch(setIsLoading(false));
				})
				.catch((error) => {
					handleError(setConnectionError, ERROR.NO_CONNECTION);
				});
		} else {
			dispatch(setCurrentCategoryAction(""));
			dispatch(getProductsAsync(null, searchPhrase, page, PAGINATION_LIMIT))
				.then(() => dispatch(setIsLoading(false)))

				.catch((error) => {
					handleError(setConnectionError, ERROR.NO_CONNECTION);
				});
		}
	}, [dispatch, params, page, shouldSearch]);

	return (
		<Container>
			<H2 currentCategory={params.idCategory}>
				{currentCategory?.name || "Все товары"}
			</H2>
			<div
				className={` ${params.idCategory ? styles.narrow : styles.products}`}
			>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<>{params.idCategory && <FilterPanel />}</>
			<>{!params.idCategory && <Pagination page={page} setPage={setPage} />}</>
		</Container>
	);
};
