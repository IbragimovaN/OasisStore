import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Product-page.module.css";
import { categoryList, allFilterPanelTypeslist } from "../../constants";
import {
	currentProductSelector,
	setCurrentProductAction,
	setIsLoading,
} from "../../redux";
import { request } from "../../utils.js/request";
import { Button, Container } from "../../components";

export const ProductPage = () => {
	const dispatch = useDispatch();
	const params = useParams();

	const currentProduct = useSelector(currentProductSelector);
	const [category, setCategory] = useState();
	const [age, setAge] = useState();
	const [hairType, setHairType] = useState();

	useEffect(() => {
		dispatch(setIsLoading(true));

		request(`/products/${params.productId}`)
			.then((data) => {
				console.log(data);
				dispatch(setCurrentProductAction(data.data));
				const current = categoryList.filter((item) => {
					return item.id === data.data.category;
				});

				const nameAge = allFilterPanelTypeslist[0].checkList.filter((item) => {
					return item.checkId === Number(data.data.age);
				});
				const nameHairType = allFilterPanelTypeslist[2].checkList.filter(
					(item) => {
						return item.checkId === Number(data.data.hairType);
					},
				);

				setCategory(...current);
				setHairType(...nameHairType);
				setAge(...nameAge);
			})
			.then(() => {
				dispatch(setIsLoading(false));
			});
	}, []);

	return (
		<Container>
			<div className={styles.wrapper}>
				<img
					src={currentProduct.imgUrl}
					alt="some"
					className={styles.image}
				></img>
				<div className={styles.coll}>
					<h3 className={styles.title}>{currentProduct.title}</h3>
					<div className={styles.properties}>
						<h3 className={styles.property_title}>Артикул:</h3>
						{currentProduct.id}
					</div>
					<div className={styles.properties}>
						<h3 className={styles.property_title}>Бренд:</h3>
						{currentProduct.brand}
					</div>
					<div className={styles.properties}>
						<h3 className={styles.property_title}>Категория:</h3>
						{category?.name}
					</div>
					{currentProduct.age && currentProduct.age !== "" && (
						<div className={styles.properties}>
							<h3 className={styles.property_title}>Походит для возраста:</h3>
							{age?.name}лет
						</div>
					)}
					{currentProduct.hairType && currentProduct.hairType !== "" && (
						<div className={styles.properties}>
							<h3 className={styles.property_title}>Походит для типа волос:</h3>
							{hairType?.name}
						</div>
					)}
					<div className={styles.properties_desc}>
						<h3 className={styles.property_title}>Описание:</h3>
						{currentProduct.description}
					</div>
				</div>
				<div className={styles.price_wrapper}>
					<div className={styles.price}>
						{currentProduct.price}
						<i className="fa fa-rub" aria-hidden="true"></i>
					</div>
					<Button>В корзину</Button>
				</div>
			</div>
		</Container>
	);
};
