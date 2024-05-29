import { Link, useNavigate } from "react-router-dom";
import styles from "./Control-panel.module.css";
import { bagProductsArrSelector, userSelector } from "../../../../redux";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "../../../../redux/actions/async-actions/logout-async";
import { setUserAction } from "../../../../redux/actions/set-user-action";
import { totalPrice } from "../../../../utils.js/total-price";

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const bagProductsArr = useSelector(bagProductsArrSelector);

	const onClickLogout = () => {
		dispatch(logoutAsync());
		sessionStorage.removeItem("userData");
		dispatch(setUserAction(undefined));
	};

	const countBag = bagProductsArr.reduce((acc, item) => {
		return (acc += item.count);
	}, 0);

	const total = totalPrice(bagProductsArr);

	return (
		<div className={styles.controlPanel}>
			<div className={styles.button_wrapper}>
				{user ? (
					<>
						<div className={styles.button_wrapper}>
							<button onClick={onClickLogout}>Выход</button>
							<div className={styles.icon_wrapper}>
								<i className={`fa fa-sign-out`} aria-hidden="true"></i>
							</div>
							<Link to="/favourites-page">
								<div className={styles.icon_wrapper}>
									<i className={`fa fa-heart`} aria-hidden="true"></i>
								</div>
							</Link>
						</div>
					</>
				) : (
					<Link to="/login">
						<div className={styles.button_wrapper}>
							<span>Войти</span>
							<div className={styles.icon_wrapper}>
								<i className={`fa fa-user`} aria-hidden="true"></i>
							</div>
						</div>
					</Link>
				)}
			</div>

			<Link to="/bag">
				<div className={styles.icon_wrapper}>
					<i className={`fa fa-shopping-bag`} aria-hidden="true"></i>
					{bagProductsArr.length > 0 && (
						<div className={styles.sircle}>{countBag}</div>
					)}
				</div>
			</Link>
			<div className={styles.cost}>
				{total} <i className="fa fa-rub" aria-hidden="true"></i>
			</div>
		</div>
	);
};
