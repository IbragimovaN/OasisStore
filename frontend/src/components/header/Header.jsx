import { Link } from "react-router-dom";
import { Logo, ControlPanel, Menu, Search } from "./header-components";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<ControlPanel />
			<Menu />
		</header>
	);
};
