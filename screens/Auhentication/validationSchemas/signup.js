import * as yup from "yup";
console.log("---------()()()", yup.object());
export const formSignup = yup.object().shape({
	name: yup
		.string()
		.required("Preencha o nome")
		.label("Nome"),
	last_name: yup
		.string()
		.required("Preencha o sobrenome")
		.label("Preencha o sobrenome"),
	cpf: yup.string().required("Preencha o CPF"),
	birth: yup.string().required("Preencha a data de nascimento"),
	cep: yup
		.string()
		.required("Preencha o CEP")
		.label("CEP"),
	street: yup
		.string()
		.required("Preencha a rua")
		.label("Rua"),
	number: yup
		.string()
		.required("Preencha o número")
		.label("Número"),
	neighborhood: yup
		.string()
		.required("Preencha o bairro")
		.label("Bairro"),
	city: yup
		.string()
		.required("Preencha o cidade")
		.label("Cidade"),
	state: yup
		.string()
		.required("Preencha o estado")
		.label("Estado"),
	crmv: yup
		.string()
		.required("Preencha o CRMV")
		.label("CRMV"),
	cellphone: yup
		.string()
		.required("Preencha o celular")
		.label("Celular"),
	email: yup
		.string()
		.required("Preencha o email")
		.label("Email"),
	password: yup
		.string()
		.required("Preencha a senha")
		.label("Senha"),
	confirm_password: yup
		.string()
		.required("Preencha o confirmar a senha")
		.label("Confirmar senha")
		.test("password-match", "O campos de senha precisar ser preenchidos igualmente", function(
			value,
		) {
			return this.parent.password === value;
		}),
});
