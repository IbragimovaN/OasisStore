import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components";
import styles from "./Favourites-page.module.css";
import { favouritesSelector, userSelector } from "../../redux";
import { ProductCard } from "../../components/catalog/catalog-components";
import { useEffect } from "react";
import { getFavouritesAsync } from "../../redux/actions/async-actions/get-favourites-async";

export const FavouritesPage = () => {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const favourites = useSelector(favouritesSelector);

	useEffect(() => {
		dispatch(getFavouritesAsync(user.id));
	}, [dispatch, user]);

	console.log(favourites);

	return (
		<Container>
			<div className={styles.wrapper}>
				{favourites.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</Container>
	);
};
