import * as yup from "yup";

export const regFromSchema = yup.object().shape({
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
	passcheck: yup
		.string()
		.required("Заполните повтор пароля")
		.oneOf([yup.ref("password"), null], "Повтор пароля не совпадает"),
});
