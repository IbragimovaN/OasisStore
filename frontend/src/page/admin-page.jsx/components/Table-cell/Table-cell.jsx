import { useEffect } from "react";
import styles from "./Table-cell.module.css";
export const TableCell = ({
	editingProduct,
	productId,
	cellRef,
	value,
	name,
}) => {
	// useEffect(() => {
	// 	console.log(editingProduct);
	// }, [editingProduct]);
	return (
		<td
			className={` ${name === "description" ? styles.cell_desc : styles.cell}`}
			contentEditable={editingProduct ? true : false}
			suppressContentEditableWarning={true}
			// suppressContentEditableWarning={editingProduct ? true : false}
			ref={cellRef}
			name={name}
		>
			{value}
		</td>
	);
};
