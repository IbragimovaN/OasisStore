import { useSelector } from "react-redux";
import { Button, Container } from "../../components";
import { BagRow } from "./components/bag-row/Bag-row";
import { bagProductsArrSelector } from "../../redux";
import styles from "./Bag.module.css";
import { totalPrice } from "../../utils.js/total-price";

export const Bag = () => {
	const bagProductsArr = useSelector(bagProductsArrSelector);

	const total = totalPrice(bagProductsArr);

	return (
		<Container>
			{bagProductsArr.length > 0 ? (
				<div className={styles.bag}>
					<div className={styles.header}>
						<div>Удалить</div>
						<div>Фото</div>
						<div>Наименование</div>
						<div>Количество</div>
						<div className={styles.price}>Стоимость</div>
					</div>
					{bagProductsArr.map((product) => (
						<BagRow key={product.id} product={product} />
					))}
					<div
						className={`${bagProductsArr.length < 4 ? styles.result_bottom : styles.result}`}
					>
						<div>Итого: {total} рублей </div>
						<Button>Оформить заказ</Button>
					</div>
				</div>
			) : (
				<div className={styles.bag_empty}>Корзина пуста</div>
			)}
		</Container>
	);
};
