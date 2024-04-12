import LOGO from "../../../../image/Logo.jpg";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export const Logo = () => {
	return (
		<Link to="/">
			<div className={styles.logo}>
				<div className={styles.img_wrapper}>
					<img src={LOGO} alt="logo" className={styles.img}></img>
				</div>
				<h1 className={styles.header}>OASIS</h1>
			</div>
		</Link>
	);
};
