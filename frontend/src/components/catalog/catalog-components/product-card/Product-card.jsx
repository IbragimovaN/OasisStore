import { Link, useParams } from "react-router-dom";
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

	const params = useParams();
	// console.log(params);
	return (
		<div className={styles.wrapper}>
			<Link
				to={
					params?.idCategory
						? `/catalog/${params.idCategory}/${id}`
						: `/catalog/allProducts/${id}`
				}
			>
				<div className={styles.link_wrapper}>
					{" "}
					<img className={styles.image} src={imgUrl} alt="some cosmetic" />
					<h3 className={styles.title}>{title}</h3>
					<div>
						{price}
						<i className="fa fa-rub" aria-hidden="true" margin="0 0 0 5px"></i>
					</div>
				</div>
			</Link>
			<Button>В корзину</Button>
		</div>
	);
};
