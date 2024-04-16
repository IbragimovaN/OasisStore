import styles from "./Buttom.module.css";
export const Button = ({ children, type, onClick, gray, disabled, width }) => {
	return (
		<button
			className={`${styles.button} ${gray ? styles.grey : ""}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
			style={{ width: width }}
		>
			{children}
		</button>
	);
};
