import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, Navigate } from "react-router-dom";

import { Button, Container, Input } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Authorization-page.module.css";
import { request } from "../../utils.js/request";
import { setUserAsync } from "../../redux/actions/async-actions/set-user-async";
import { userSelector } from "../../redux";

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required("Заполните логин")
		.matches(/^\w+$/, "Неверный логин. Допускаются только буквы и цифры")
		.min(3, "Не верный логин. Минимум 3 символа.")
		.max(15, "Не верный логин. Максимум 15 символов"),
	password: yup
		.string()
		.required("Заполните пароль")
		.matches(
			/^[\w#%]+$/,
			"Неверно заполнен пароль, допускаются буквыб цифры и знаки № %",
		)
		.min(6, "Не верный пароль. Минимум 6 символа.")
		.max(30, "Не верный пароль. Максимум 30 символов"),
});

export const Authorization = () => {
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

	const user = useSelector(userSelector);
	// const user = JSON.parse(sessionStorage.getItem("userData"));
	console.log(user);

	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();

	const onSubmit = ({ login, password }) => {
		console.log(login, password);
		dispatch(setUserAsync(login, password));
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
								onChange: () => setServerError(null),
							})}
						/>
						<Input
							type="text"
							placeholder={"пароль"}
							{...register("password", {
								onChange: () => setServerError(null),
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
