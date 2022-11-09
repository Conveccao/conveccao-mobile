import { View } from "react-native";

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
    DateTextSubtitle
} from "./styles";

export default function AlertsDetails() {
    return (
        <Container>
            <ContentTypeContainerAll>
                <ContentTypeContainer>
                    <TypeText>Tipo:</TypeText>
                    <TypeTextSubtitle>Deslizamento de terra</TypeTextSubtitle>
                </ContentTypeContainer>
                <ContentLocalContainer>
                    <View>
                        <LocalText>Localização</LocalText>
                        <LocalTextSubtitle>PQ. Tecnológico</LocalTextSubtitle>
                    </View>
                </ContentLocalContainer>
            </ContentTypeContainerAll>

            <ContentHourContainerAll>
                <ContentHourContainer>
                    <HourText>Hora:</HourText>
                    <HourTextSubtitle>13:28:43</HourTextSubtitle>
                </ContentHourContainer>
                <ContentDateContainer>
                    <View>
                        <DateText>Data:</DateText>
                        <DateTextSubtitle>07/11/2022</DateTextSubtitle>
                    </View>
                </ContentDateContainer>
            </ContentHourContainerAll>
        </Container>
    )
}