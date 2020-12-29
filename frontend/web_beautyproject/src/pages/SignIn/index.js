import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form , Input} from '@rocketseat/unform';
import * as Yup from 'yup';
// import { Link } from "react-router-dom";

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo_main.svg';

const schema = Yup.object().shape({
  email: Yup.string()
  .email('Insira um e-mail válido')
  .required('O e-mail é obrigatório'),
  password: Yup.string()
  .required('A senha é obrigatória'),
})

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password}){
    dispatch(signInRequest(email,password));
  }

  return (
    <>
    <img src={logo} alt="GoBarber"></img>

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="Seu e-mail"></Input>
      <Input name="password" type="password" placeholder="Sua senha secreta"></Input>

    <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      <a href="/register">Criar conta gratuita</a>
    </Form>
    </>
  );

}
