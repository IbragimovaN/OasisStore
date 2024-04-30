import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button, Container } from "../../components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Register.module.css";
import { regFromSchema } from "./validate/reg-form-schema";
import { errorServerFormSelector } from "../../redux";
import { setServerErrorFormAction } from "../../redux/actions/set-server-error-action";
import { registerAsync } from "../../redux/actions/async-actions/register-async";

export const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const serverErrorForm = useSelector(errorServerFormSelector);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: "",
			password: "",
			passcheck: "",
		},
		resolver: yupResolver(regFromSchema),
	});

	const onSubmit = ({ login, password }) => {
		dispatch(registerAsync(login, password)).then(() => {
			navigate("/");
		});
	};

	const formError =
		errors?.login?.message ||
		errors?.password?.message ||
		errors?.passcheck?.message;

	const errorMessage = formError || serverErrorForm;

	return (
		<Container>
			<div className={styles.authorization}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Регистрация</h2>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Input
							type="text"
							placeholder="Логин"
							{...register("login", {
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

						{errorMessage && <div className={styles.error}>{errorMessage}</div>}
					</form>
				</div>
			</div>
		</Container>
	);
};
