import { useSelector } from "react-redux";
import { isLoadingSelector } from "../../redux";
import styles from "./Container.module.css";

export const Container = ({ children }) => {
	const isLoading = useSelector(isLoadingSelector);

	return (
		<div className={styles.container}>
			{isLoading ? (
				<div className={styles.loading}>
					<div className={styles.loader}></div>
				</div>
			) : (
				children
			)}
		</div>
	);
};
