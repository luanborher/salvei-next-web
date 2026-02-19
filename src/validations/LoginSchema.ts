import * as yup from 'yup';

export type ILoginForm = yup.InferType<typeof LoginSchema>;

export const LoginSchema = yup.object({
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('Insira um e-mail válido'),
  password: yup.string().required('Senha é obrigatória'),
});

export type IChangePasswordSchema = yup.InferType<typeof ChangePasswordSchema>;

export const ChangePasswordSchema = yup.object({
  currentPassword: yup.string().required('Senha atual é obrigatória'),
  password: yup
    .string()
    .required('Nova senha é obrigatória')
    .min(8, 'Mínimo de 8 caracteres')
    .matches(/[a-z]/, 'Deve conter pelo menos 1 letra minúscula')
    .matches(/[A-Z]/, 'Deve conter pelo menos 1 letra maiúscula')
    .matches(/[0-9]/, 'Deve conter pelo menos 1 número')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Deve conter pelo menos 1 caractere especial',
    )
    .max(20, 'Máximo de 20 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirmação da nova senha é obrigatória'),
});
