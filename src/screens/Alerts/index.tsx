import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { CardAlert } from '../../components/CardAlert';
import { Container } from './styles';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { URI } from '../../services/uri';

type AlertsProps = {
  id: number;
  occurrence: string;
  date: string;
  hour: string;
}

export default function Alerts() {
  const navigation = useNavigation();
  const [alerts, setAlerts] = useState<AlertsProps[]>([]);

  useEffect(() => {
      api
      .get(URI.ALERTS)
      .then(response => {
        setAlerts(response.data);
      })
      .catch(error => {
          console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <Container>
        {alerts.map((alerts: any) => (
          <CardAlert
            key={alerts.id}
            typeAlert={alerts.occurrence}
            onPress={() => navigation.navigate(
              'AlertsDetails',
              { 
                id: alerts.id,
                occurrence: alerts.occurrence,
                place: alerts.place,
                date:  alerts.date,
                hour: alerts.hour,
              })}
          />
        ))}
      </Container>
    </ScrollView>
  );
}