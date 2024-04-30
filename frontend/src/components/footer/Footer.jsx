import styles from "./Footer.module.css";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div> Copyright © 2011-2024 Beauty Storage Oasis</div>
			<div className={styles.contacts}>
				<a href={"tel:74951112233"}>7(495)111 22 33</a>
				<a href="oasis@mail.ru">oasis@mail.ru</a>
			</div>
		</footer>
	);
};
