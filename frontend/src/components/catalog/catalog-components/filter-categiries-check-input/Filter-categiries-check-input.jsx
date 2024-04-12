import { useEffect, useState } from "react";
import styles from "./Filter-categories-check.module.css";

export const FilterCategiriesCheckInput = ({
	item,
	onClickCheckboxChange,
	dataTypeOfFilter,
}) => {
	return (
		<div className={styles.input_form}>
			<input
				className={styles.input}
				type="checkbox"
				id={item.checkId}
				onChange={({ target }) => onClickCheckboxChange(target)}
				// onChange={() => onClickCheckboxChange(item.checkId, dataTypeOfFilter)}
				data-type={dataTypeOfFilter}
			/>
			<label className={styles.label} htmlFor={item.checkId}>
				{item.name}
			</label>
		</div>
	);
};
