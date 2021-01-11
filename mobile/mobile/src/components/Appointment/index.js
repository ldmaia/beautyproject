import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import currentAvatar from '../../assets/default_user.jpg';

import { Container, Left, Avatar, Info, Name, Time, Canceled } from './styles';

export default function Appointment({ data, onCancel }) {
    // console.tron.log(data.provider.avatar.url);
  const DEFAULT_IMAGE = Image.resolveAssetSource(currentAvatar).uri;

  const dateFormated = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSufix: true,
    });
  }, [data.date]);

  return (

    <Container past={data.past}>
      <Left>
        <Avatar resizeMode={'cover'}
          source={{
            uri: data.provider.avatar && __DEV__
            ? data.provider.avatar.url
            : DEFAULT_IMAGE,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateFormated}</Time>
          {data.canceled_at && <Canceled>Cancelado</Canceled>}
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}

Appointment.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    canceled_at: PropTypes.string,
    past: PropTypes.bool,
    cancellable: PropTypes.bool,
    provider: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};
