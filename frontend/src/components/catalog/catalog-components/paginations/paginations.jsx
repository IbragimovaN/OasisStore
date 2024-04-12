import { lastPageSelector } from "../../../../redux";
import { Button } from "../../../button/Button";
import styles from "./paginations.module.css";
import { useSelector } from "react-redux";

export const Pagination = ({ page, setPage }) => {
	const lastPage = useSelector(lastPageSelector);
	return (
		<div className={styles.paginations}>
			<Button disabled={page === 1} onClick={() => setPage(1)} gray={true}>
				В начало
			</Button>
			<Button
				disabled={page === 1}
				onClick={() => setPage(page - 1)}
				gray={true}
			>
				Предыдущая
			</Button>
			<div className={styles.currentPage}>Страница:{page}</div>
			<Button
				disabled={page === lastPage}
				onClick={() => setPage(page + 1)}
				gray={true}
			>
				Следующая
			</Button>
			<Button
				disabled={page === lastPage}
				onClick={() => setPage(lastPage)}
				gray={true}
			>
				В конец
			</Button>
		</div>
	);
};
