'use client';

import LoginForm from '@/components/Forms/LoginForm/LoginForm';

import { ImageCOntainer, Image, Main } from './styles';

const Login = () => {
  return (
    <Main>
      <ImageCOntainer>
        <Image src="/img/login/logo.svg" />
      </ImageCOntainer>
      <LoginForm />
    </Main>
  );
};

export default Login;
