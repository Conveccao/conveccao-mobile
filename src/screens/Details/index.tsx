import { ScrollView, View } from 'react-native';
import { useRoute } from "@react-navigation/native";

import {
    StationContentTop,
    Image,
    Divider,
    StationContentData,
    ContentDataTitle,
    ContentDataTitleText,
    ContentDataContainerAll,
    ContentNameContainer,
    NameText,
    NameTextSubtitle,
    ContentLocalContainer,
    LocalText,
    LocalTextSubtitle,
    ContentDateContainerAll,
    ContentDateContainer,
    DateText,
    DateTextSubtitle,
    ContentLatLongContainerAll,
    ContentLatContainer,
    LatText,
    LatTextSubtitle,
    ContentLonContainer,
    LonText,
    LonTextSubtitle,

} from './styles';

import StationChart from '../../components/StationChart';

type StationProps = {
    name: string;
    reference: string;
    link: string;
    installationDate: string;
    lat: string;
    lon: string;
};

export default function Details() {
    const routes = useRoute();
    const { name, reference, link, installationDate, lat, lon } = routes.params as StationProps;

    return (
        <>
            <ScrollView>
                <StationContentTop>
                    <Image source={{ uri: link }} />
                    <ContentDataContainerAll>
                        <ContentNameContainer>
                            <NameText>Nome da estação</NameText>
                            <NameTextSubtitle>{name}</NameTextSubtitle>
                        </ContentNameContainer>
                        <ContentLocalContainer>
                            <View>
                                <LocalText>Localização</LocalText>
                                <LocalTextSubtitle>{reference}</LocalTextSubtitle>
                            </View>
                        </ContentLocalContainer>
                    </ContentDataContainerAll>

                    <ContentDateContainerAll>
                        <ContentDateContainer>
                            <DateText>Data da instalação</DateText>
                            <DateTextSubtitle>{installationDate}</DateTextSubtitle>
                        </ContentDateContainer>
                    </ContentDateContainerAll>
                    
                    <ContentLatLongContainerAll>
                        <ContentLatContainer>
                            <LatText>Latitude</LatText>
                            <LatTextSubtitle>{lat}</LatTextSubtitle>
                        </ContentLatContainer>
                        <ContentLonContainer>
                            <LonText>Longitude</LonText>
                            <LonTextSubtitle>{lon}</LonTextSubtitle>
                        </ContentLonContainer>
                    </ContentLatLongContainerAll>
                    <Divider />
                </StationContentTop>

                <StationContentData>
                    <ContentDataTitle>
                        <ContentDataTitleText>Dados coletados da estação</ContentDataTitleText>
                    </ContentDataTitle>
                    <StationChart title='Pluviometro' />
                </StationContentData>
            </ScrollView>
        </>
    );
}   