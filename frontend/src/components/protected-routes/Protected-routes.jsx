import { Navigate } from "react-router-dom";
import { userSelector } from "../../redux";
import { useSelector } from "react-redux";

export const ProtectedRoutes = ({ children, roles }) => {
	const user = useSelector(userSelector);

	if (!user) {
		return <Navigate to="/login" />;
	}

	const hasUserRole = () => {
		return roles.includes(user.roleId) ? true : false;
	};

	if (!hasUserRole()) {
		return <Navigate to="/error" />;
	}
	return <div>{children}</div>;
};
