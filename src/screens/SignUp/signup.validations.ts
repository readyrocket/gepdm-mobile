import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
	name: Yup.string().required(`Campo obrigatório`),
	email: Yup.string().email(`Email inválido`)
		.required(`Campo obrigatório`),
	password: Yup.string()
		.min(8, `O mínimo é 8 caracteres`)
		.required(`Campo obrigatório`)
		.oneOf(
			[
				Yup.ref(`confirmedPassword`), null
			],
			`As senhas devem corresponder`
		),
	confirmedPassword: Yup.string()
		.required(`Campo obrigatório`)
		.min(8, `O mínimo é 8 caracteres`)
		.oneOf([Yup.ref(`password`), null], `As senhas devem corresponder`),
});
