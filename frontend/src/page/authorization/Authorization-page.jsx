import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Container, Input } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Authorization-page.module.css";
import {
	loginAsync,
	setUserAsync,
} from "../../redux/actions/async-actions/login-async";
import { errorServerSelector, userSelector } from "../../redux";
import { authFormSchema } from "./vallidate/auth-form-schema";
import { setServerErrorAction } from "../../redux/actions/set-server-error-action";

export const Authorization = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const serverError = useSelector(errorServerSelector);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: "",
			password: "",
		},
		resolver: yupResolver(authFormSchema),
	});

	const onSubmit = ({ login, password }) => {
		dispatch(loginAsync(login, password)).then((roleId) => {
			roleId === 0 ? navigate("/adminPage") : navigate("/");
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	return (
		<Container>
			<div className={styles.authorization}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Авторизация</h2>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Input
							type="text"
							placeholder="Логин"
							{...register("login", {
								onChange: () => dispatch(setServerErrorAction(null)),
							})}
						/>
						<Input
							type="text"
							placeholder={"пароль"}
							{...register("password", {
								onChange: () => dispatch(setServerErrorAction(null)),
							})}
						/>
						<Button type="submit">Войти</Button>
						{errorMessage && <div className={styles.error}>{errorMessage}</div>}
						<Link to="/register">Регистрация</Link>
					</form>
				</div>
			</div>
		</Container>
	);
};
