import { useEffect, useState } from "react";
import styles from "./Filter-categories.module.css";
import { FilterCategiriesCheckInput } from "../filter-categiries-check-input/Filter-categiries-check-input";

export const FilterCategories = ({
	id,
	name,
	checkList,
	onClickCheckboxChange,
}) => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>{name}</h3>
			{checkList.map((item) => (
				<FilterCategiriesCheckInput
					key={item.checkId}
					item={item}
					onClickCheckboxChange={onClickCheckboxChange}
					dataTypeOfFilter={id}
				></FilterCategiriesCheckInput>
			))}
		</div>
	);
};
