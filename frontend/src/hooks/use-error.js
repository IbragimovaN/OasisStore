import { useDispatch } from "react-redux";
import { setConnectionError, setIsLoading } from "../redux";
import { useNavigate } from "react-router-dom";

// export const useError = () => {
// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();

// 	const errorFunc = () => {
// 		dispatch(
// 			setConnectionError("ошибка получения данных, попробуйте позже..."),
// 		);
// 		dispatch(setIsLoading(false));
// 		navigate("/error");
// 	};

// 	return { errorFunc };
// };
