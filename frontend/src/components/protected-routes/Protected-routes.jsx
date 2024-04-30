import { Navigate } from "react-router-dom";
import { userSelector } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { setRouteErrorAction } from "../../redux/actions/set-route-error";

export const ProtectedRoutes = ({ children, roles }) => {
	const user = useSelector(userSelector);
	const dispatch = useDispatch();

	if (!user) {
		return <Navigate to="/login" />;
	}

	const hasUserRole = () => {
		return roles.includes(user.roleId) ? true : false;
	};

	if (!hasUserRole()) {
		dispatch(setRouteErrorAction("Ошибка доступа"));
		return <Navigate to="/error" />;
	}
	return <div>{children}</div>;
};
