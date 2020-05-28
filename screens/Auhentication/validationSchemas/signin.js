import * as yup from 'yup';

export const formModalForgotPass = yup.object().shape({
    email: yup
        .string()
        .email('Email invalido')
        .label('Email')
        .required(),
});

export const formSignin = yup.object().shape({
    crmv: yup
        .string()
        .label('CRMV')
        .required(),
    password: yup
        .string()
        .required()
        .label('Senha'),
    state: yup
        .string()
        .required()
        .label('Estado')

});