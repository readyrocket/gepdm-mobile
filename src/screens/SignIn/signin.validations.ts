import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
	email: Yup.string().email(`Email inválido`)
		.required(`Campo obrigatório`),
	password: Yup.string().min(8, `O mínimo é 8 caracteres!`)
		.required(`Campo obrigatório`),
});
