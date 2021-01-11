import React, { useMemo } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import currentAvatar from '~/assets/default_user.jpg';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function ConfirmAppointment({ route,navigation }) {
  const DEFAULT_IMAGE = Image.resolveAssetSource(currentAvatar).uri;
  const { provider } = route.params;
  const { time } = route.params;
  console.tron.log("Aqui: "+time);
  // const time = route.params;

  const dateFormatted = useMemo(() => {
    return formatDistance(parseISO(time), new Date(), { locale: pt });
  }, [time]);

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : DEFAULT_IMAGE,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}
