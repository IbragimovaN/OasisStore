import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Logo, ControlPanel, Menu } from "./header-components";
import { Button } from "../button/Button";
import { ROLE } from "../../constants";
import { infoMessageSelector, setInfoMessage, userSelector } from "../../redux";
import styles from "./Header.module.css";

export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const infoMessage = useSelector(infoMessageSelector);

	useEffect(() => {
		if (infoMessage) {
			setTimeout(() => {
				dispatch(setInfoMessage(null));
				navigate("/");
			}, 3000);
		}
	}, [infoMessage, dispatch, navigate]);

	const user = useSelector(userSelector);
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<Logo />
				{infoMessage && <div className={styles.infoMessage}>{infoMessage}</div>}
				{user?.roleId === ROLE.ADMIN && (
					<Link to="/adminPage">
						<Button width="150px">Админ-панель</Button>
					</Link>
				)}
			</div>
			<ControlPanel />

			<Menu />
		</header>
	);
};
