import * as yup from "yup";

export const resetPasswordFromSchema = yup.object().shape({
	email: yup
		.string()
		.required("Введите почту")
		.matches(
			/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
			"Неверный формат",
		)
		.min(3, "Не верный формат. Минимум 3 символа.")
		.max(50, "Не верный формат. Максимум 50 символов"),
});
