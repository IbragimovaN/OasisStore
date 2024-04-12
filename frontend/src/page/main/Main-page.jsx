import styles from "./Main-page.module.css";
export const MainPage = () => {
	return (
		<main className={styles.main}>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<h1 className={styles.title}>
						The Best Natural <span>& Organic Cosmetic </span>
					</h1>
					<div className={styles.text}>
						широкий выбор экологически чистых продуктов для ухода за кожей и
						волосами, в которых нет вредных или токсичных веществ.
					</div>
				</div>
			</div>
		</main>
	);
};
