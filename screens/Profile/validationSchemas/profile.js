import * as yup from 'yup';

export const formEditProfile = yup.object().shape({
  last_name: yup
        .string()
        .label('Sobrenome')
        .required(),
    cpf: yup
        .string()
        .required()
        .label('CPF'),
    cep: yup
        .string()
        .required()
        .label('CEP'),
    street: yup
        .string()
        .required()
        .label('Rua'),
    number: yup
        .string()
        .required()
        .label('Número'),
    complement: yup
        .string()
        .required()
        .label('Complemento'),
    neighborhood: yup
        .string()
        .required()
        .label('Bairro'),
    city: yup
        .string()
        .required()
        .label('Cidade'),
    state: yup
        .string()
        .required()
        .label('Estado'),
    crmv: yup
        .string()
        .required()
        .label('CRMV'),
    mormo_license: yup
        .string()
        .required()
        .label('Habilitação p/ Mormo'),
    ordinance_license: yup
        .string()
        .required()
        .label('Portaria Habilitação'),
    cellphone: yup
        .string()
        .required()
        .label('Celular'),
    email: yup
        .string()
        .required()
        .label('Email'),
    password: yup
        .string()
        .required()
        .label('Senha'),
    confirm_password: yup
        .string()
        .required()
        .label('Confirmar senha')
        .test('password-match', 'O campos de senha precisar ser preenchidos igualmente', function(value) {
            return this.parent.password === value;
        })
});