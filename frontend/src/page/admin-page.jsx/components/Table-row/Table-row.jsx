import { useRef, useState } from "react";
import styles from "./Table-row.module.css";
import { TableCell } from "../Table-cell/Table-cell";
import { useDispatch, useSelector } from "react-redux";
import {
	isOpenModalSelector,
	isUpdatedProductsSelector,
	setCurrentIdAction,
	setIsUpdatedProducts,
} from "../../../../redux";

import { setIsOpenModal } from "../../../../redux/actions/set-is-open-modal-action";
import { setModalText } from "../../../../redux/actions/set-modal-text";
import { request } from "../../../../utils.js/request";

export const TableRow = ({ product }) => {
	const dispatch = useDispatch();
	const isOpenModal = useSelector(isOpenModalSelector);
	const isUpdatedPruducts = useSelector(isUpdatedProductsSelector);
	const [editingProduct, setEditingProduct] = useState(false);
	const descriptionRef = useRef(null);
	const titleRef = useRef(null);
	const imgUrlRef = useRef(null);
	const priceRef = useRef(null);
	const categoryRef = useRef(null);
	const ratingRef = useRef(null);
	const brandRef = useRef(null);
	const ageRef = useRef(null);
	const hairTypeRef = useRef(null);

	const propertyProductArr = [
		{ value: product.id, cellRef: null },
		{ value: product.title, cellRef: titleRef },
		{
			value: product.description,
			cellRef: descriptionRef,
			name: "description",
		},
		{ value: product.imgUrl, cellRef: imgUrlRef, name: "imgUrl" },
		{ value: product.price, cellRef: priceRef },
		{ value: product.category, cellRef: categoryRef },
		{ value: product.brand, cellRef: brandRef },
		{ value: product.rating, cellRef: ratingRef },
		{ value: product.age || null, cellRef: ageRef },
		{ value: product.hairType || null, cellRef: hairTypeRef },
	];

	const onClickDeleteProduct = () => {
		dispatch(setModalText("Улалить продукт?"));
		dispatch(setIsOpenModal(true));
		dispatch(setCurrentIdAction(product.id));
		setEditingProduct(false);
	};

	const onClickSaveProduct = (productId) => {
		const updateProduct = {
			title: titleRef.current.innerHTML,
			description: descriptionRef.current.innerHTML,
			imgUrl: imgUrlRef.current.innerHTML,
			price: priceRef.current.innerHTML,
			category: categoryRef.current.innerHTML,
			brand: brandRef.current.innerHTML,
			rating: ratingRef.current.innerHTML,
			age: ageRef.current.innerHTML,
			hairType: hairTypeRef.current.innerHTML,
		};

		request(`/products/${productId}`, "PATCH", updateProduct).then(() => {
			dispatch(setIsUpdatedProducts(!isUpdatedPruducts));
		});
		setEditingProduct(false);
	};

	return (
		<>
			<tr>
				<td className={styles.btn_cell}>
					{editingProduct ? (
						<>
							<button
								className={styles.btn_save}
								onClick={() => onClickSaveProduct(product.id)}
							>
								Сохранить
							</button>
							<button onClick={() => setEditingProduct(false)}>Отмена</button>
						</>
					) : (
						<>
							<button onClick={() => setEditingProduct(true)}>
								Редактировать
							</button>
							<button
								className={styles.btn_delete}
								onClick={() => onClickDeleteProduct(product.id)}
							>
								Удалить
							</button>
						</>
					)}
				</td>

				{propertyProductArr.map((item, index) => (
					<TableCell
						key={index}
						value={item.value}
						cellRef={item.cellRef}
						name={item.name}
						editingProduct={editingProduct}
					/>
				))}

				<td className={styles.image_cell}>
					<img
						className={styles.image}
						src={product.imgUrl}
						alt="some cosmetic"
					/>
				</td>
			</tr>
		</>
	);
};
