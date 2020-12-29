import React from 'react'
import { useDispatch } from 'react-redux';
import { Form , Input} from '@rocketseat/unform';
import * as Yup from 'yup';
// import { Link } from "react-router-dom";

import logo from '../../assets/logo_main.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string()
  .email('Insira um e-mail válido')
  .required('O e-mail é obrigatório'),
  password: Yup.string().min(6,'Precisa ter no mínimo 6 caracteres')
  .required('A senha é obrigatória'),
})

export default function SignUp() {
  const dispatch = useDispatch();


  function handleSubmit({ name, email, password}){
    dispatch(signUpRequest( name, email, password));
  }
  return (
    <>
    <img src={logo} alt="GoBarber"></img>

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="name" placeholder="Nome Completo"></Input>
      <Input name="email" type="email" placeholder="Seu e-mail"></Input>
      <Input name="password" type="password" placeholder="Sua senha secreta"></Input>

      <button type="submit">Criar conta</button>
      <a href="/" >Já tenho login</a>
    </Form>
    </>
  );

}
