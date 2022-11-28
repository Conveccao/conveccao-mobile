import { useState, useEffect } from 'react';
import { ScrollView } from "react-native";

import CardStation from "../../components/CardStation";
import { Container } from "./styles";

import api from '../../services/api';
import { URI } from '../../services/uri';
import { useNavigation } from '@react-navigation/native';

type StationProps = {
    id: number;
    name: string;
    reference: string;
    link: string;
};

export default function Home() {
    const navigation = useNavigation();
    const [stations, setStations] = useState<StationProps[]>([]);

    useEffect(() => {
        api
        .get(URI.STATIONS)
        .then(response => {
            setStations(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);


    return (
        <>
            <ScrollView>
                <Container>
                    {stations.map((station: any) => (
                        <CardStation
                            key={station.id}
                            name={station.name}
                            reference={station.reference}
                            link={station.link}
                            onPress={
                                () => navigation.navigate('Details',
                                    {
                                        id: station.id,
                                        name: station.name,
                                        reference: station.reference,
                                        link: station.link,
                                        installationDate: station.installation_date,
                                        lat: station.lat,
                                        lon: station.lon,
                                    })}
                        />
                    ))}
                </Container>
            </ScrollView>
        </>
    );
}