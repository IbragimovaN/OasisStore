import { menu } from "../../../constants";

export const findChildMenuCategory = (categoryId) => {
	let child = null;

	menu.forEach((category) => {
		category.children.forEach((item) => {
			if (item.id === categoryId) {
				child = { id: item.id, name: item.name };
			}
		});
	});

	return child;
};
