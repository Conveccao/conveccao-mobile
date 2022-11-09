import { useRoute } from "@react-navigation/native";

import {
    Container,
    HeadContainer,
    HeadTitleContainer,
    HeadTitle,
    HeadSubTitle,
    CommentsContainer,
    CommentsTitle,
    CommentsSubTitle,
    ContainerContent
} from "./styles";

export default function AlertDetails() {

    return (
        <Container>
            <ContainerContent>
            <HeadContainer>
                <HeadTitleContainer>
                    <HeadTitle>Tipo:</HeadTitle>
                    <HeadSubTitle>Deslizamento de terra</HeadSubTitle>
                </HeadTitleContainer>
                <HeadTitleContainer>
                    <HeadTitle>Localização:</HeadTitle>
                    <HeadSubTitle>PQ. Tecnológico</HeadSubTitle>
                </HeadTitleContainer>
            </HeadContainer>
            <HeadContainer>
                <HeadTitleContainer>
                    <HeadTitle>Hora:</HeadTitle>
                    <HeadSubTitle>13:28:43</HeadSubTitle>
                </HeadTitleContainer>
                <HeadTitleContainer>
                    <HeadTitle>Data:</HeadTitle>
                    <HeadSubTitle>07/11/2022</HeadSubTitle>
                </HeadTitleContainer>
            </HeadContainer>
            <CommentsContainer>
                <CommentsTitle>Comentários</CommentsTitle>
                <CommentsSubTitle>Atenção a qualquer momento pode ocorrer deslizamrnto de terra </CommentsSubTitle>
            </CommentsContainer>
            </ContainerContent>
        </Container>
    )
}