import React from 'react'
import { useSelector } from 'react-redux';

import previewProfile from '../../assets/default_user.jpg';


import Notifications from '../Notifications';
import { Container, Profile, Content } from './styles';


export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src="" alt=""/>
          <a href="/dashboard">DASHBOARD</a>
        </nav>

        <aside>
          <Notifications/>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <a href="/profile">Meu Perfil</a>
            </div>
            <img src={(profile.avatar && profile.avatar.url) || previewProfile} alt=""></img>
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
