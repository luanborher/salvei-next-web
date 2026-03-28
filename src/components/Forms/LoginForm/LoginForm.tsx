import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

import { localStorageKeys } from '@/utils/localStorageKeys';
import { ILoginForm, LoginSchema } from '@/validations/LoginSchema';
import { useAuth, User } from '@/hooks/useAuth';
import Input from '@/components/Input';
import api from '@/services/api';

import {
  ButtonLogin,
  LoginForm,
  Center,
  InputForm,
  SubtitleForm,
  TitleForm,
  Image,
  HeaderTitle,
} from './styles';

export interface ILoginResponse {
  message: string;
  token: string;
  user: User;
}

const Login = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (form: ILoginForm) => {
    try {
      setIsSubmitting(true);

      const { data } = await api.post<ILoginResponse>('/auth/login', {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem(localStorageKeys.accessToken, data.token);
      localStorage.setItem(localStorageKeys.refreshToken, data.token);
      localStorage.setItem(localStorageKeys.user, JSON.stringify(data.user));

      setUser(data.user);

      router.push('/jogos');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Center>
      <LoginForm>
        <Image src="/ticka_logo_full.svg" alt="logo-login-form" />

        <HeaderTitle>
          <TitleForm>Área de acesso - Master</TitleForm>
          <SubtitleForm>Insira seus dados para continuar</SubtitleForm>
        </HeaderTitle>

        <InputForm>
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            {...register('email')}
            error={errors?.email?.message}
          />

          <Input
            isPassword
            label="Senha"
            placeholder="Digite sua senha"
            {...register('password')}
            error={errors?.password?.message}
          />
        </InputForm>

        <ButtonLogin onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
          Entrar
        </ButtonLogin>
      </LoginForm>
    </Center>
  );
};

export default Login;
