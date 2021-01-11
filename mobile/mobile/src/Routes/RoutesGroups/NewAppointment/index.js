import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectProvider from '~/pages/NewAppointment/SelectProvider';
import SelectDateTime from '~/pages/NewAppointment/SelectDateTime';
import ConfirmAppointment from '~/pages/NewAppointment/ConfirmAppointment';

const AppStack = createStackNavigator();



export default function NewAppointment() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#FFF',
        headerLeftContainerStyle: { marginLeft: 20 },
      }}
    >
      <AppStack.Screen name="SelectProvider" component={SelectProvider} options={{ headerTitle: 'Selecione um provedor' }} />
      <AppStack.Screen name="SelectDateTime" component={SelectDateTime} options={{ headerTitle: 'Selecione uma data'}}/>
      <AppStack.Screen name="ConfirmAppointment" component={ConfirmAppointment} options={{ headerTitle: 'Confirmar Agendamento'}}/>

    </AppStack.Navigator>
  );
}

//  navigation.setOptions({
//    title: 'Selecione data e hora',
//    headerLeft: () => (
//      <TouchableOpacity
//        onPress={() => {
 //         navigation.goBack();
//        }}
//      >
//        <Icon name="chevron-left" size={20} color="#FFF" />
//      </TouchableOpacity>
//    ),
//  });
