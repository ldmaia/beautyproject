import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  Separator,
  SignOutButton,
} from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Clean input form after profile is updated on Redux store
  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Perfil</Title>

        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Nome Completo"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
          />
          <Separator />
          <FormInput
            icon="lock-outline"
            placeholder="Senha atual"
            value={oldPassword}
            onChangeText={setOldPassword}
            secureTextEntry
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Nova senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Confirmar nova senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          <SignOutButton onPress={handleSignOut}>Sair</SignOutButton>
        </Form>
      </Container>
    </Background>
  );
}
