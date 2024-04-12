import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";

import styles from "./App.module.css";
import { routesPath } from "./components/protected-routes/route-path";
import { ProtectedRoutes } from "./components/protected-routes/Protected-routes";

export const App = () => {
	return (
		<div className={styles.app}>
			<Header />

			<Routes>
				{routesPath.map((item) => (
					<Route
						key={item.path}
						path={item.path}
						element={
							item.isAuth ? (
								<ProtectedRoutes roles={item.roles}>
									{item.element}
								</ProtectedRoutes>
							) : (
								item.element
							)
						}
					/>
				))}
			</Routes>

			<Footer />
		</div>
	);
};
