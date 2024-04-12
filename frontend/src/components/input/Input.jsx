import styles from "./Input.module.css";
import { forwardRef } from "react";

export const Input = forwardRef(
	({ className, width, onChange, ...props }, ref) => {
		return (
			<input
				className={styles.input}
				// onChange={({ target }) => onChange(target.value)}
				{...props}
				ref={ref}
			></input>
		);
	},
);
