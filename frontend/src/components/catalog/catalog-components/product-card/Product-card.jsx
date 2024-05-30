import { Link, useParams } from "react-router-dom";
import { Button, FavouriteBtn } from "../../../../components";
import { useAddToBag } from "../../../../hooks";
import styles from "./Product-card.module.css";
import { useSelector } from "react-redux";
import { favouritesSelector } from "../../../../redux";

export const ProductCard = ({ product }) => {
	const params = useParams();
	const favourites = useSelector(favouritesSelector);
	const { onClickAddToBag } = useAddToBag(product);

	return (
		<div className={styles.wrapper}>
			<Link
				to={
					params?.idCategory
						? `/catalog/${params.idCategory}/${product.id}`
						: `/catalog/allProducts/${product.id}`
				}
			>
				<div className={styles.link_wrapper}>
					{favourites?.some((item) => item.id === product.id) && (
						<div className={styles.icon_favourite}>
							<i className={`fa fa-heart`} aria-hidden="true"></i>
						</div>
					)}
					<img
						className={styles.image}
						src={product.imgUrl}
						alt="some cosmetic"
					/>
					<h3 className={styles.title}>{product.title}</h3>
					<div>
						{product.price}
						<i className="fa fa-rub" aria-hidden="true" margin="0 0 0 5px"></i>
					</div>
				</div>
			</Link>
			<Button onClick={onClickAddToBag}>В корзину</Button>
		</div>
	);
};
