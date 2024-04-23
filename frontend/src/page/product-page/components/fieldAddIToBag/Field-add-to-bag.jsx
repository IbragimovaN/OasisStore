import { Button } from "../../../../components";
import styles from "./Field-add-to-bag.module.css";
import { useAddToBag } from "../../../../hooks";

export const FieldAddToBag = ({ currentProduct }) => {
	const { onClickAddToBag } = useAddToBag(currentProduct);
	return (
		<div className={styles.price_wrapper}>
			<div className={styles.price}>
				{currentProduct.price}
				<i className="fa fa-rub" aria-hidden="true"></i>
			</div>
			<Button onClick={onClickAddToBag}>В корзину</Button>
		</div>
	);
};
