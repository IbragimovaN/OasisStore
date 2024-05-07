import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Input } from "../../components";
import { authFormSchema } from "./vallidate/auth-form-schema";
import {
	errorServerFormSelector,
	userSelector,
	setServerErrorFormAction,
	loginAsync,
} from "../../redux";
import styles from "./Authorization-page.module.css";

export const Authorization = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const serverErrorForm = useSelector(errorServerFormSelector);
	const user = useSelector(userSelector);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(authFormSchema),
	});

	const onSubmit = ({ email, password }) => {
		dispatch(loginAsync(email, password)).then((roleId) => {
			roleId && roleId > 0 ? navigate("/") : navigate("/adminPage");
		});
	};

	const formError = errors?.email?.message || errors?.password?.message;
	const errorMessage = formError || serverErrorForm;

	return (
		<Container>
			<div className={styles.authorization}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Авторизация</h2>
					{user ? (
						<div>Вы уже авторизованы</div>
					) : (
						<>
							<div>
								{errorMessage && (
									<div className={styles.error}>{errorMessage}</div>
								)}
							</div>
							<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
								<Input
									type="text"
									placeholder="Email"
									{...register("email", {
										onChange: () => dispatch(setServerErrorFormAction(null)),
									})}
								/>
								<Input
									type="text"
									placeholder={"пароль"}
									{...register("password", {
										onChange: () => dispatch(setServerErrorFormAction(null)),
									})}
								/>
								<Button type="submit">Войти</Button>
							</form>
							<Link to="/register">Регистрация</Link>
							<Link to="/login/password">Забыли пароль?</Link>
						</>
					)}
				</div>
			</div>
		</Container>
	);
};
