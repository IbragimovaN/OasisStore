import styles from "./Menu-item.module.css";
import { DropdownSubMenu } from "../dropdown-sub-menu/Dropdown-sub-menu";
import { useState } from "react";

export const MenuItem = ({ item }) => {
	const [isOpenMenuItem, setIsOpenMenuItem] = useState(false);

	const onMouseEnter = () => {
		setIsOpenMenuItem(!isOpenMenuItem);
	};

	const onMouseLeave = () => {
		setIsOpenMenuItem(false);
	};
	return (
		<div className={styles.list_item_wrapper} onMouseLeave={onMouseLeave}>
			<li onMouseEnter={onMouseEnter} className={styles.list_item}>
				{item.name}
			</li>

			<DropdownSubMenu
				key={item.id}
				idMenuEl={item.id}
				children={item.children}
				isOpenMenuItem={isOpenMenuItem}
				setIsOpenMenuItem={setIsOpenMenuItem}
			></DropdownSubMenu>
		</div>
	);
};
