import styles from "./Table-cell.module.css";
export const TableCell = ({
	editingProduct,
	productId,
	cellRef,
	value,
	name,
}) => {
	return (
		<td
			className={` ${name === "description" ? styles.cell_desc : styles.cell}`}
			contentEditable={editingProduct ? true : false}
			suppressContentEditableWarning={true}
			ref={cellRef}
			name={name}
		>
			{value}
		</td>
	);
};
