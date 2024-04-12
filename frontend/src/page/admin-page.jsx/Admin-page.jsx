import { useEffect, useState } from "react";
import { Container } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Admin-page.module.css";
import {
	productsSelector,
	searchPhraseSelector,
	setIsLoading,
	setProductsAsync,
	shouldSearchSelector,
} from "../../redux";
import { PAGINATION_LIMIT } from "../../constants/paginations-limit";
import { Pagination } from "../../components/catalog/catalog-components/paginations/paginations";

export const AdminPage = () => {
	const dispatch = useDispatch();
	const searchPhrase = useSelector(searchPhraseSelector);
	const shouldSearch = useSelector(shouldSearchSelector);
	const products = useSelector(productsSelector);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(
			setProductsAsync(null, searchPhrase, page, PAGINATION_LIMIT),
		).finally(() => dispatch(setIsLoading(false)));
	}, [shouldSearch]);

	const [editingProduct, setEditingProduct] = useState(null);
	const handleDeleteProduct = (productId) => {
		// Добавить обработчик удаления товара
	};

	const handleProductChange = (productId, fieldName, value) => {
		// Добавить обработчик изменения значения поля товара
	};

	const handleSaveProduct = (productId) => {
		// Добавить обработчик сохранения изменений товара
	};

	return (
		<Container>
			<div className={styles.admin_page}>
				<h3>Все товары</h3>
				<table className={styles.table}>
					<thead>
						<td className={styles.btn_cell}></td>
						<td>Артикул</td>
						<td>Название</td>
						<td>Описание</td>
						<td>Картинака</td>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product.id}>
								<td className={styles.btn_cell}>
									<button onClick={() => setEditingProduct(product.id)}>
										Редактировать
									</button>
									<button
										className={styles.btn_delete}
										onClick={() => handleDeleteProduct(product.id)}
									>
										Удалить
									</button>
									{editingProduct === product.id && (
										<button onClick={() => handleSaveProduct(product.id)}>
											Сохранить
										</button>
									)}
								</td>
								<td>{product.id}</td>
								<td>
									{editingProduct === product.id ? (
										<input
											value={product.title}
											onChange={(e) =>
												handleProductChange(product.id, "title", e.target.value)
											}
										/>
									) : (
										product.title
									)}
								</td>
								<td>
									{editingProduct === product.id ? (
										<input
											value={product.description}
											onChange={(e) =>
												handleProductChange(
													product.id,
													"description",
													e.target.value,
												)
											}
										/>
									) : (
										product.description
									)}
								</td>
								<td className={styles.image_cell}>
									<img
										className={styles.image}
										src={product.imgUrl}
										alt="some cosmetic"
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<Pagination />
			</div>
		</Container>
	);
};
