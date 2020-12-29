import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import  AvatarInput  from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);


  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut(){
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Old Password" />
        <Input name="password" type="password" placeholder="New Password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>Sair</button>


    </Container>
  );
}
