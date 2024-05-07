import styles from "./Sorting.module.css";
import _ from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../redux/selectors";
import { setProductsAction } from "../../redux/actions/set-products-action";

const sortOption = [
	{
		value: "priceDESC",
		label: "По убыванию цены",
		sort: (data) => _.orderBy(data, ["price"], ["desc"]),
	},
	{
		value: "priceASC",
		label: "По возрастанию цены",
		sort: (data) => _.orderBy(data, ["price"], ["asc"]),
	},
];

export const Sorting = () => {
	const [currentSorting, setCurrentSorting] = useState("priceDESC");
	const products = useSelector(productsSelector);
	const dispatch = useDispatch();

	const onClickSort = (e) => {
		setCurrentSorting(e.target.value);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const sortObj = sortOption.find((item) => item.value === currentSorting);
		if (sortObj) {
			dispatch(setProductsAction(sortObj.sort(products)));
		}
	}, [currentSorting, dispatch]);

	return (
		<div className={styles.wrapper}>
			<span>Сортировка</span>
			<select value={currentSorting} onChange={onClickSort}>
				{sortOption.map((item) => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
		</div>
	);
};
