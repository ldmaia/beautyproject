import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import DataTimeInput from '../../../components/DateTimeInput';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({ route, navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const { provider }  = route.params;


  useEffect(() => {
    async function loadAvailableHours() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: { date: date.getTime() },
      });

      setHours(response.data);
    }

    loadAvailableHours();
  }, [date, provider.id]);


  function handleSelectHour(time) {
    navigation.navigate('ConfirmAppointment', { provider, time });
  }

  return (
    <Background>
      <Container>
        <DataTimeInput date={date} onChange={setDate} />
        <HourList
          data={hours}
          extraData={date}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Hour onPress={() => handleSelectHour(item.value)} enabled={item.available}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

