import React from "react";

import { useNavigation } from "@react-navigation/native"

import {
    Container,
    TitlePage,
    ButtonStart,
    TextButtonStart
} from './styles';

import { propsStack } from "../../routes/Models";

export default function Welcome() {
    const navigation = useNavigation <propsStack> ()
    return (
        <Container>
            <TitlePage>
                Obtenha os dados na sua mão
            </TitlePage>
            <ButtonStart>
                <TextButtonStart onPress={() => navigation.navigate('Main', {
                    screen: 'Estações',
                    
                }
                )} >
                    COMEÇAR
                </TextButtonStart>
            </ButtonStart>
        </Container>
    );
}   