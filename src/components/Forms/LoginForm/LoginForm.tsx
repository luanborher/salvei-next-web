import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

import Input from '@/components/Input';
import { localStorageKeys } from '@/utils/localStorageKeys';
import { ILoginForm, LoginSchema } from '@/validations/LoginSchema';
import { useAuth } from '@/hooks/useAuth';

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

// TODO: add error modal
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

      const data = {
        id: 1,
        username: 'User Test',
        email: 'user@gmail.com',
      };

      console.log('Login data:', form);

      localStorage.setItem(localStorageKeys.accessToken, '1234567890');
      localStorage.setItem(localStorageKeys.refreshToken, '1234567890');
      localStorage.setItem(localStorageKeys.user, JSON.stringify(data));

      setUser(data);
      router.push('/jogos');
    } catch (error) {
      //
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Center>
      <LoginForm>
        <Image src="/img/login/login.svg" alt="logo-login-form" />

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
