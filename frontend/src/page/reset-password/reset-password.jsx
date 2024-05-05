import { useForm } from "react-hook-form";
import { Button, Container, Input } from "../../components";
import { request } from "../../utils.js/request";
import styles from "./reset-password.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
	errorServerFormSelector,
	setInfoMessage,
	setServerErrorFormAction,
} from "../../redux";
import { resetPasswordFromSchema } from "./validate/reset-password-form-schema";

export const ResetPassword = () => {
	const dispatch = useDispatch();
	const serverErrorForm = useSelector(errorServerFormSelector);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
		},
		resolver: yupResolver(resetPasswordFromSchema),
	});

	const onSubmit = ({ email }) => {
		request("/reset", "POST", { email: email }).then(({ error }) => {
			error
				? dispatch(setServerErrorFormAction(error))
				: dispatch(setInfoMessage("Сообщение отправлено"));
		});
	};

	const formError = errors?.email?.message;

	const errorMessage = formError || serverErrorForm;
	return (
		<Container>
			<div className={styles.wrapper}>
				<h3>Забыли пароль?</h3>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						type="text"
						placeholder="Email"
						{...register("email", {
							onChange: () => dispatch(setServerErrorFormAction(null)),
						})}
					/>

					<Button type="submit" disabled={!!formError}>
						Отправить
					</Button>

					{errorMessage && <div className={styles.error}>{errorMessage}</div>}
				</form>

				<div>
					На Вашу почту придет сообщение со ссылкой для сброса пороля. Ссылка
					действительна 30 минут.
				</div>
			</div>
		</Container>
	);
};
