import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Input } from "../../components";
import styles from "./New-password.module.css";
import { regFromSchema } from "../register/validate/reg-form-schema";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	editPasswordAsync,
	errorServerFormSelector,
	getUserResetTokenAsync,
	routeErrorSelector,
	setInfoMessage,
	setServerErrorFormAction,
	userSelector,
} from "../../redux";
import { useEffect } from "react";

export const NewPassword = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const serverErrorForm = useSelector(errorServerFormSelector);
	const routeError = useSelector(routeErrorSelector);
	const user = useSelector(userSelector);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			password: "",
			passcheck: "",
		},
		resolver: yupResolver(regFromSchema),
	});

	useEffect(() => {
		dispatch(getUserResetTokenAsync(params.resetToken));
	}, [dispatch, params]);

	const onSubmit = ({ password }) => {
		dispatch(editPasswordAsync(params.resetToken, user._id, password)).then(
			dispatch(setInfoMessage("Успешно")),
			navigate("/"),
		);
	};

	const formError =
		errors?.email?.message ||
		errors?.password?.message ||
		errors?.passcheck?.message;

	const errorMessage = formError || serverErrorForm;
	if (routeError) {
		navigate("/error");
	}
	return (
		<Container>
			<div className={styles.page}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Новый пароль</h2>
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
								placeholder="Новый пароль"
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
								Установить новый пароль
							</Button>
						</form>
					</>
				</div>
			</div>
		</Container>
	);
};
