import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import { useIsFocused } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Container,List,Title } from './styles';
import Background from '~/components/Background';

import Appointment from '~/components/Appointment';


export default function Dashboard () {
  const [appointments, setAppointments] = useState('');
  const isFocused = useIsFocused();


  async function loadAppointments() {
      const response = await api.get('appointments');
      setAppointments(response.data);
    }

  useEffect(() => {
    if(isFocused){
      loadAppointments();
    }
  }, [isFocused])

  async function handleCancel(id){
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
        ?{
          ...appointment,
          canceled_at: response.data.canceled_at,
        }
        : appointment
      )
    )
  }




  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}




// Dashboard.propTypes = {
//  isFocused: PropTypes.bool.isRequired,
// };
