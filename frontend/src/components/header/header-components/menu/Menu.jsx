import { useState } from "react";
import { DropdownSubMenu } from "./menu-components/dropdown-sub-menu/Dropdown-sub-menu";
import styles from "./Menu.module.css";
import { MenuItem } from "./menu-components/menu-item/Menu-item";
import { menu } from "../../../../constants";
import { Link } from "react-router-dom";

export const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>
				{menu.map((item) => (
					<MenuItem key={item.id} item={item}></MenuItem>
				))}
				<Link to="/catalog">
					<li>все товары</li>
				</Link>
			</ul>
		</nav>
	);
};
