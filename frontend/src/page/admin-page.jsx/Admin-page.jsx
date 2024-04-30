import { useEffect, useState } from "react";
import { Button, Container, Search } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Admin-page.module.css";
import {
	productsSelector,
	searchPhraseSelector,
	setIsLoading,
	getProductsAsync,
	shouldSearchSelector,
	isUpdatedProductsSelector,
	setIsUpdatedProducts,
} from "../../redux";
import { PAGINATION_LIMIT } from "../../constants/paginations-limit";
import { Pagination } from "../../components/catalog/catalog-components/paginations/paginations";
import { TableRow } from "./components/Table-row/Table-row";
import { Modal } from "../../components/modal/Modal";
import { request } from "../../utils.js/request";
import { Sorting } from "../../components/sorting/Sorting";
import { ProtectedRoutes } from "../../components/protected-routes/Protected-routes";

export const AdminPage = () => {
	const dispatch = useDispatch();
	const searchPhrase = useSelector(searchPhraseSelector);
	const shouldSearch = useSelector(shouldSearchSelector);
	const products = useSelector(productsSelector);
	const isUpdatingProducts = useSelector(isUpdatedProductsSelector);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(
			getProductsAsync(null, searchPhrase, page, PAGINATION_LIMIT),
		).finally(() => dispatch(setIsLoading(false)));
	}, [dispatch, shouldSearch, page, isUpdatingProducts]);

	const onClickAddNewProduct = () => {
		request(`/products`, "POST", { title: "Новый продукт" }).then(() => {
			dispatch(setIsUpdatedProducts(!isUpdatingProducts));
		});
	};

	return (
		<Container>
			<div className={styles.admin_page}>
				<div className={styles.admin_page_header}>
					<Search />
					<Sorting />
					<Button onClick={onClickAddNewProduct}> Добавить новый товар</Button>
					<Button> Настройка доступа пользователей</Button>
				</div>
				<table className={styles.table}>
					<thead>
						<tr>
							<td className={styles.btn_cell}></td>
							<td>Артикул</td>
							<td>Название</td>
							<td>Описание</td>
							<td>Ссылка на фото</td>
							<td>Цена</td>
							<td>Категория</td>
							<td>Бренд</td>
							<td>Рейтинг</td>
							<td>Возрастная катогория</td>
							<td>По типу волос катогория</td>
							<td>Фото</td>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<TableRow key={product.id} product={product} />
						))}
					</tbody>
				</table>
				<Pagination page={page} setPage={setPage} />
				<Modal />
			</div>
		</Container>
	);
};
