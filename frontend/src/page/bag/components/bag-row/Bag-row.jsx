import { useDispatch } from "react-redux";
import { deleteProductFromBagAction, setCountAction } from "../../../../redux";
import styles from "./Bag-row.module.css";
export const BagRow = ({ product }) => {
	const dispatch = useDispatch();

	const total = product.count * product.price;
	const formattedTotal = total.toLocaleString();
	const onClick = () => {
		dispatch(deleteProductFromBagAction(product.id));
	};
	const onClickMinus = () => {
		dispatch(setCountAction({ id: product.id, sign: "-" }));
	};

	const onClickPluse = () => {
		dispatch(setCountAction({ id: product.id, sign: "+" }));
	};
	return (
		<div className={styles.row}>
			<div className={styles.icon_wrapper} onClick={onClick}>
				<i className="fa fa-trash-o" aria-hidden="true"></i>
			</div>
			<img className={styles.image} src={product.imgUrl} alt="some"></img>

			<div className={styles.title}>{product.title}</div>
			<div className={styles.count_wrapper}>
				<button className={styles.count_btn} onClick={onClickMinus}>
					-
				</button>
				<div>{product.count}</div>
				<button className={styles.count_btn} onClick={onClickPluse}>
					+
				</button>
			</div>
			<div className={styles.price}>
				{formattedTotal} <i className="fa fa-rub" aria-hidden="true"></i>
			</div>
		</div>
	);
};
