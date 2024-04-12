import styles from "./Buttom.module.css";
export const Button = ({ children, type, onClick, gray, disabled }) => {
	return (
		<button
			className={`${styles.button} ${gray ? styles.grey : ""}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
