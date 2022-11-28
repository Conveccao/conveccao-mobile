import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
    Container,
    ContentTypeContainerAll,
    ContentTypeContainer,
    ContentLocalContainer,
    ContentHourContainerAll,
    ContentHourContainer,
    ContentDateContainer,
    TypeText,
    TypeTextSubtitle,
    LocalText,
    LocalTextSubtitle,
    HourText,
    HourTextSubtitle,
    DateText,
    DateTextSubtitle,
} from "./styles";

type alertProps = {
    id: number;
    occurrence: string;
    place: string;
    date: string;
    hour: string;
};

export default function AlertsDetails() {
    const routes = useRoute();
    const { occurrence, place, date, hour } = routes.params as alertProps;

    return (
        <Container>
            <ContentTypeContainerAll>
                <ContentTypeContainer>
                    <TypeText>Tipo:</TypeText>
                    <TypeTextSubtitle>{occurrence}</TypeTextSubtitle>
                </ContentTypeContainer>
                <ContentLocalContainer>
                    <View>
                        <LocalText>Localização:</LocalText>
                        <LocalTextSubtitle>{place}</LocalTextSubtitle>
                    </View>
                </ContentLocalContainer>
            </ContentTypeContainerAll>

            <ContentHourContainerAll>
                <ContentHourContainer>
                    <HourText>Hora:</HourText>
                    <HourTextSubtitle>{hour}</HourTextSubtitle>
                </ContentHourContainer>
                <ContentDateContainer>
                    <View>
                        <DateText>Data:</DateText>
                        <DateTextSubtitle>{date}</DateTextSubtitle>
                    </View>
                </ContentDateContainer>
            </ContentHourContainerAll>
        </Container>
    )
}