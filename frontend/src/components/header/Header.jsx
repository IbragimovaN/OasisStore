import { Link } from "react-router-dom";
import { Logo, ControlPanel, Menu, Search } from "./header-components";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { Button } from "../button/Button";
import { ROLE } from "../../constants";
import { userSelector } from "../../redux";

export const Header = () => {
	const user = useSelector(userSelector);
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<Logo />
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
