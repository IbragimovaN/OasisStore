import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { categoryList, allFilterPanelTypeslist } from "../../constants";

import {
	currentProductSelector,
	setCurrentProductAction,
	setIsLoading,
} from "../../redux";
import { request } from "../../utils.js/request";
import { Container } from "../../components";
import { FieldAddToBag } from "./components/fieldAddIToBag/Field-add-to-bag";
import { Property } from "./components/property/Property";
import { setRouteErrorAction } from "../../redux/actions/set-route-error";
import styles from "./Product-page.module.css";
import { ERROR } from "../../constants/error-message";

export const ProductPage = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const currentProduct = useSelector(currentProductSelector);
	const [category, setCategory] = useState();
	const [age, setAge] = useState();
	const [hairType, setHairType] = useState();

	useEffect(() => {
		dispatch(setIsLoading(true));

		request(`/products/${params.productId}`)
			.then(({ data, error }) => {
				if (error) {
					dispatch(setRouteErrorAction(ERROR.NOT_FOUND));
					navigate("/error");
				} else if (data) {
					dispatch(setCurrentProductAction(data.data));
					const current = categoryList.filter(
						(item) => item.id === data.data.category,
					);

					const nameAge = allFilterPanelTypeslist[0].checkList.filter(
						(item) => item.checkId === Number(data.data.age),
					);
					const nameHairType = allFilterPanelTypeslist[2].checkList.filter(
						(item) => item.checkId === Number(data.data.hairType),
					);

					setCategory(...current);
					setHairType(...nameHairType);
					setAge(...nameAge);
				}
			})
			.then(() => {
				dispatch(setIsLoading(false));
			});
	}, []);

	const onClickBack = () => {
		navigate(-1);
	};

	return (
		<Container>
			<div className={styles.wrapper}>
				<button onClick={onClickBack} className={styles.back_btn}>
					&#8592;
				</button>
				<img
					src={currentProduct.imgUrl}
					alt="some"
					className={styles.image}
				></img>
				<div className={styles.coll}>
					<h3 className={styles.title}>{currentProduct.title}</h3>

					<Property propertyName="Артикул" value={currentProduct.id} />
					<Property propertyName="Бренд" value={currentProduct.brand} />
					<Property propertyName="Категория" value={category?.name} />

					{currentProduct.age && currentProduct.age !== "" && (
						<Property propertyName="Походит для возраста" value={age?.name} />
					)}
					{currentProduct.hairType && currentProduct.hairType !== "" && (
						<Property
							propertyName="Походит для типа волос"
							value={hairType?.name}
						/>
					)}
					<Property
						propertyName="Описание"
						value={currentProduct.description}
						className={styles.properties_desc}
					/>
				</div>
				<FieldAddToBag currentProduct={currentProduct} />
			</div>
		</Container>
	);
};
