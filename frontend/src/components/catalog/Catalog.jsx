import styles from "./Catalog.module.css";
import { useEffect, useState } from "react";
import { ProductCard } from "./catalog-components/product-card/Product-card";
import { H2 } from "../../components/h2/H2";
import { FilterPanel } from "./catalog-components/filter-panel/Filter-panel";
import { useDispatch, useSelector } from "react-redux";
import {
	currentCategorySelector,
	productsSelector,
	searchPhraseSelector,
	shouldSearchSelector,
} from "../../redux/selectors";
import { getProductsAsync } from "../../redux/actions/async-actions/get-products-async";
import { Container } from "../../components";
import {
	setConnectionError,
	setCurrentCategoryAction,
	setIsLoading,
} from "../../redux";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination } from "./catalog-components//paginations/paginations";
import { PAGINATION_LIMIT } from "../../constants/paginations-limit";
import { setFilterPanelTypeList } from "../../redux/actions/set-filterPanelTypeList-action";
import { includesRouteParams } from "./utills/includes-route-params";
import { setRouteErrorAction } from "../../redux/actions/set-route-error";
import { ERROR } from "../../constants/error-message";

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
			dispatch(getProductsAsync(null, searchPhrase, page, 12))
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
