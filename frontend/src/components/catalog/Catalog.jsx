import styles from "./Catalog.module.css";
import { useEffect, useState } from "react";
import { ProductCard } from "./catalog-components/product-card/Product-card";
import { getAllProducts } from "../../bff/api";
import { H2 } from "../../components/h2/H2";
import { FilterPanel } from "./catalog-components/filter-panel/Filter-panel";
import { useDispatch, useSelector } from "react-redux";
import {
	currentCategorySelector,
	productsSelector,
	searchPhraseSelector,
	shouldSearchSelector,
} from "../../redux/selectors";
import { setProductsAsync } from "../../redux/actions/set-products-async";
import { Container } from "../../components";
import {
	setCurrentCategoryAction,
	setFilterPanelTypeListAsync,
	setIsLoading,
	setShouidSearchAction,
} from "../../redux";
import { useParams } from "react-router-dom";
import { Pagination } from "./catalog-components//paginations/paginations";
import { PAGINATION_LIMIT } from "../../constants/paginations-limit";

export const Catalog = () => {
	const dispatch = useDispatch();
	const products = useSelector(productsSelector);
	const currentCategory = useSelector(currentCategorySelector);
	const params = useParams();
	const searchPhrase = useSelector(searchPhraseSelector);
	const shouldSearch = useSelector(shouldSearchSelector);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(setIsLoading(true));
		if (params.idCategory) {
			Promise.all([
				dispatch(setProductsAsync(params.idCategory)),
				dispatch(setCurrentCategoryAction(params?.idCategory)),
				dispatch(setFilterPanelTypeListAsync(params?.idCategory)),
			]).finally(() => {
				dispatch(setIsLoading(false));
			});
		} else {
			dispatch(setCurrentCategoryAction(""));
			dispatch(
				setProductsAsync(null, searchPhrase, page, PAGINATION_LIMIT),
			).finally(() => dispatch(setIsLoading(false)));
		}
	}, [dispatch, params, page, shouldSearch]);

	return (
		<Container>
			<button
				className={styles.btn}
				onClick={() => dispatch(setShouidSearchAction(!shouldSearch))}
			>
				hhhhh
			</button>
			<H2>{currentCategory?.name}</H2>
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
