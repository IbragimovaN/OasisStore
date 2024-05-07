import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button, Container } from "../../components";
import { regFromSchema } from "./validate/reg-form-schema";
import {
	errorServerFormSelector,
	setInfoMessage,
	userSelector,
	setServerErrorFormAction,
	registerAsync,
} from "../../redux";
import styles from "./Register.module.css";

export const Register = () => {
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
			passcheck: "",
		},
		resolver: yupResolver(regFromSchema),
	});

	const onSubmit = ({ email, password }) => {
		dispatch(registerAsync(email, password)).then(({ error, user }) => {
			if (user) {
				dispatch(setInfoMessage("Вы вошли в аккаунт"));
				navigate("/");
			}
		});
	};

	const formError =
		errors?.email?.message ||
		errors?.password?.message ||
		errors?.passcheck?.message;

	const errorMessage = formError || serverErrorForm;

	return (
		<Container>
			<div className={styles.authorization}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Регистрация</h2>
					{user ? (
						<div>Для регистрации нового пользователя, выйдите из аккаунта</div>
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
									type="password"
									placeholder="Пароль"
									{...register("password", {
										onChange: () => dispatch(setServerErrorFormAction(null)),
									})}
								/>
								<Input
									type="password"
									placeholder="Повтор пароля"
									{...register("passcheck", {
										onChange: () => dispatch(setServerErrorFormAction(null)),
									})}
								/>
								<Button type="submit" disabled={!!formError}>
									Зарегестироваться
								</Button>
							</form>
						</>
					)}
				</div>
			</div>
		</Container>
	);
};
