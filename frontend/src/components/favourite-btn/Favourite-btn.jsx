import { useEffect, useState } from "react";
import {
	favouritesSelector,
	setFavouritesAction,
	userSelector,
} from "../../redux";
import styles from "./Favourite-btn.module.css";
import { useSelector, useDispatch } from "react-redux";
import { request } from "../../utils.js/request";

export const FavouriteBtn = ({ id }) => {
	const [isChecked, setIsChecked] = useState("");
	const user = useSelector(userSelector);
	const favourites = useSelector(favouritesSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		user && setIsChecked(favourites?.some((item) => item._id === id));
	}, [user, favourites, id]);

	if (!user) {
		return;
	}

	const onClickCheckedFavourite = () => {
		if (isChecked) {
			request(`/user/${user.id}`, "DELETE", { productId: id }).then(
				({ error }) => {
					if (error) {
						console.log(error);
					} else {
						setIsChecked(false);
					}
				},
			);
		} else {
			request(`/user/${user.id}`, "PATCH", { productId: id }).then(
				({ error }) => {
					if (error) {
						console.log(error);
					} else {
						setIsChecked(true);
					}
				},
			);
		}
	};

	return (
		<div className={styles.favourite} onClick={onClickCheckedFavourite}>
			{isChecked ? (
				<i className={`fa fa-heart`} aria-hidden="true"></i>
			) : (
				<i className={`fa fa-heart-o`} aria-hidden="true"></i>
			)}
		</div>
	);
};
