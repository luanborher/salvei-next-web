'use client';

import LoginForm from '@/components/Forms/LoginForm/LoginForm';

import { ImageCOntainer, Image, Main } from './styles';

const Login = () => {
  return (
    <Main>
      <ImageCOntainer>
        <Image src="/ticka_logo_full.svg" />
      </ImageCOntainer>
      <LoginForm />
    </Main>
  );
};

export default Login;
