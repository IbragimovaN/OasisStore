import { Button } from "../../../../components";
import styles from "./Product-card.module.css";
export const ProductCard = ({ product }) => {
	const {
		id,
		title,
		brand,
		category,
		skinType,
		price,
		rating,
		imgUrl,
		description,
	} = product;
	return (
		<div className={styles.wrapper}>
			<img className={styles.image} src={imgUrl} alt="some cosmetic" />
			<h3 className={styles.title}>{title}</h3>
			<div>
				{price}
				<i className="fa fa-rub" aria-hidden="true" margin="0 0 0 5px"></i>
			</div>
			<Button>В корзину</Button>
		</div>
	);
};
