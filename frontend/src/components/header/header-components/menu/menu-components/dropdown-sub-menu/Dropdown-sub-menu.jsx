import styles from "./Dropdown-sub-menu.module.css";

import { Link } from "react-router-dom";

export const DropdownSubMenu = ({ children, isOpenMenuItem }) => {
	return (
		isOpenMenuItem && (
			<nav className={styles.wrapper}>
				{children.map((item) => (
					<li
						key={item.id}
						id={item.id}
						data-name={item.name}
						className={styles.item}
					>
						<Link to={`catalog/${item.id}`}>{item.name}</Link>
					</li>
				))}
			</nav>
		)
	);
};
