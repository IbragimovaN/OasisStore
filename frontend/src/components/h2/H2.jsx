import { Search } from "../search/Search";
import { Sorting } from "../sorting/Sorting";
import styles from "./H2.module.css";
export const H2 = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<h2>{children}</h2>
			<Search></Search>
			<Sorting></Sorting>
		</div>
	);
};
