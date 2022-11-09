import React from 'react';
import { ScrollView } from 'react-native';
import { CardAlert } from '../../components/CardAlert';
import { Container } from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Alerts() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <CardAlert typeAlert='Deslizamento de terra' onPress={() => navigation.navigate('AlertsDetails')}/>
      </Container>
    </ScrollView>
  );
}