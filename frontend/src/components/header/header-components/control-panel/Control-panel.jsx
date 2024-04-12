import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../../button/Button";

import styles from "./Control-panel.module.css";
import { userSelector } from "../../../../redux";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "../../../../redux/actions/async-actions/logout-async";
import { useState } from "react";
import { setUserAction } from "../../../../redux/actions/set-user-action";

export const ControlPanel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(userSelector);

	console.log(user);

	const onClickLogout = () => {
		dispatch(logoutAsync());
		sessionStorage.removeItem("userData");
		dispatch(setUserAction(undefined));
	};

	return (
		<div className={styles.controlPanel}>
			<div className={styles.button_wrapper}>
				{user !== undefined ? (
					<div className={styles.button_wrapper}>
						<Button onClick={onClickLogout}>Выход</Button>
						<div className={styles.icon_wrapper}>
							<i className={`fa fa-sign-out`} aria-hidden="true"></i>
						</div>
					</div>
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

			<div className={styles.icon_wrapper}>
				<i className={`fa fa-shopping-bag`} aria-hidden="true"></i>
			</div>
			<div className={styles.cost}>
				00.00 <i className="fa fa-rub" aria-hidden="true"></i>
			</div>
		</div>
	);
};
