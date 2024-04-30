import { useSelector } from "react-redux";
import { connectionErrorSelector, routeErrorSelector } from "../../redux";
import { Container } from "../../components";
import styles from "./Error-page.module.css";

export const ErrorPage = ({ error }) => {
	const routeError = useSelector(routeErrorSelector);
	const connectionError = useSelector(connectionErrorSelector);
	return (
		<Container>
			<div className={styles.errorPage}>
				{routeError || error || connectionError}
			</div>
		</Container>
	);
};
